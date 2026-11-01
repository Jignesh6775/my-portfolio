'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useMotionValueEvent, MotionValue } from 'framer-motion';

const FRAME_COUNT = 146;
const CONCURRENCY = 6;
const INITIAL_BUFFER = 15;

interface ScrollyCanvasProps {
    scrollYProgress: MotionValue<number>;
}

export default function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Frame cache & tracking (refs prevent 146 React re-renders)
    const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
    const inFlightRef = useRef<Set<number>>(new Set());
    const failedFramesRef = useRef<Set<number>>(new Set());
    const activeRequestsRef = useRef<number>(0);

    // Render & scroll state tracking
    const targetFrameRef = useRef<number>(0);
    const lastDrawnFrameRef = useRef<number>(-1);
    const scrollDirectionRef = useRef<'down' | 'up'>('down');
    const rafRef = useRef<number | null>(null);
    const isMountedRef = useRef<boolean>(true);

    // Only one state for initial first-frame readiness
    const [hasFirstFrame, setHasFirstFrame] = useState(false);

    // Helper: Find closest loaded frame if requested frame is buffering
    const getClosestLoadedFrame = useCallback((targetIndex: number): number | null => {
        const images = imagesRef.current;
        if (images.has(targetIndex)) return targetIndex;

        for (let offset = 1; offset < FRAME_COUNT; offset++) {
            const prev = targetIndex - offset;
            const next = targetIndex + offset;

            // Prioritize previous frame for smoother continuity
            if (prev >= 0 && images.has(prev)) return prev;
            if (next < FRAME_COUNT && images.has(next)) return next;
        }

        return null;
    }, []);

    // Draw frame onto canvas with cover-fit scaling
    const renderFrame = useCallback((targetIndex: number) => {
        if (!canvasRef.current || !isMountedRef.current) return;

        const frameToDraw = getClosestLoadedFrame(targetIndex);
        if (frameToDraw === null) return;

        const img = imagesRef.current.get(frameToDraw);
        if (!img || img.naturalWidth === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Scale to cover
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        lastDrawnFrameRef.current = frameToDraw;
    }, [getClosestLoadedFrame]);

    // Efficient requestAnimationFrame scheduler (at most one pending frame draw)
    const scheduleRender = useCallback((frameIndex: number) => {
        targetFrameRef.current = frameIndex;

        if (rafRef.current !== null) {
            return;
        }

        rafRef.current = requestAnimationFrame(() => {
            rafRef.current = null;
            if (isMountedRef.current) {
                renderFrame(targetFrameRef.current);
            }
        });
    }, [renderFrame]);

    // Priority selector for next frame to load
    const getNextFrameToLoad = useCallback((): number | null => {
        const images = imagesRef.current;
        const inFlight = inFlightRef.current;
        const failed = failedFramesRef.current;

        const isAvailable = (idx: number) =>
            idx >= 0 && idx < FRAME_COUNT && !images.has(idx) && !inFlight.has(idx) && !failed.has(idx);

        const target = targetFrameRef.current;
        const isDown = scrollDirectionRef.current === 'down';

        // 1. Exact target frame requested by current scroll position
        if (isAvailable(target)) return target;

        // 2. Lookahead buffer in direction of travel (next 15 frames)
        for (let offset = 1; offset <= 15; offset++) {
            const candidate = isDown ? target + offset : target - offset;
            if (isAvailable(candidate)) return candidate;
        }

        // 3. Lookbehind buffer for reverse scroll momentum (previous 5 frames)
        for (let offset = 1; offset <= 5; offset++) {
            const candidate = isDown ? target - offset : target + offset;
            if (isAvailable(candidate)) return candidate;
        }

        // 4. Initial buffer frames (0 to 14) for fast entry
        for (let i = 0; i < Math.min(INITIAL_BUFFER, FRAME_COUNT); i++) {
            if (isAvailable(i)) return i;
        }

        // 5. Closest remaining unbuffered frame
        let closestDist = Infinity;
        let closestFrame: number | null = null;

        for (let i = 0; i < FRAME_COUNT; i++) {
            if (isAvailable(i)) {
                const dist = Math.abs(i - target);
                if (dist < closestDist) {
                    closestDist = dist;
                    closestFrame = i;
                }
            }
        }

        return closestFrame;
    }, []);

    // Worker queue pump: keeps up to CONCURRENCY requests active until all 146 frames load
    const pumpQueue = useCallback(() => {
        if (!isMountedRef.current) return;

        while (activeRequestsRef.current < CONCURRENCY) {
            const nextFrame = getNextFrameToLoad();
            if (nextFrame === null) {
                // All available frames are either loaded, in-flight, or failed
                break;
            }

            activeRequestsRef.current++;
            inFlightRef.current.add(nextFrame);

            const img = new Image();
            const filename = `/sequence-webp/${nextFrame.toString().padStart(3, '0')}.webp`;

            const onComplete = (success: boolean) => {
                if (!isMountedRef.current) return;

                activeRequestsRef.current = Math.max(0, activeRequestsRef.current - 1);
                inFlightRef.current.delete(nextFrame);

                if (success && img.naturalWidth > 0) {
                    imagesRef.current.set(nextFrame, img);

                    // First frame loaded -> reveal canvas immediately
                    if (nextFrame === 0 || imagesRef.current.size >= 1) {
                        setHasFirstFrame((prev) => {
                            if (!prev) scheduleRender(targetFrameRef.current);
                            return true;
                        });
                    }

                    // If newly loaded frame is our target or closer than what was drawn, redraw
                    if (targetFrameRef.current === nextFrame ||
                        (lastDrawnFrameRef.current !== targetFrameRef.current &&
                         Math.abs(nextFrame - targetFrameRef.current) < Math.abs(lastDrawnFrameRef.current - targetFrameRef.current))) {
                        scheduleRender(targetFrameRef.current);
                    }
                } else {
                    failedFramesRef.current.add(nextFrame);
                }

                // Continue draining queue
                pumpQueue();
            };

            img.onload = () => onComplete(true);
            img.onerror = () => onComplete(false);
            img.src = filename;
        }
    }, [getNextFrameToLoad, scheduleRender]);

    // Mount lifecycle: start loading frame 0 & pump initial queue
    useEffect(() => {
        isMountedRef.current = true;

        // Start priority loading
        pumpQueue();

        return () => {
            isMountedRef.current = false;
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
        };
    }, [pumpQueue]);

    // Handle canvas resize and immediate redraw
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                renderFrame(targetFrameRef.current);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [renderFrame]);

    // Track scroll position changes
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const prevTarget = targetFrameRef.current;
        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(latest * FRAME_COUNT)
        );

        if (frameIndex > prevTarget) {
            scrollDirectionRef.current = 'down';
        } else if (frameIndex < prevTarget) {
            scrollDirectionRef.current = 'up';
        }

        scheduleRender(frameIndex);
        pumpQueue();
    });

    return (
        <div className="absolute inset-0 h-full w-full bg-[#121212]">
            <canvas
                ref={canvasRef}
                className="block h-full w-full object-cover"
            />
            {!hasFirstFrame && (
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    Loading...
                </div>
            )}
        </div>
    );
}
