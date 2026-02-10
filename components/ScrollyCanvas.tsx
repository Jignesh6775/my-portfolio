'use client';

import { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, MotionValue } from 'framer-motion';

const FRAME_COUNT = 192;

interface ScrollyCanvasProps {
    scrollYProgress: MotionValue<number>;
}

export default function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const imagePromises: Promise<void>[] = [];

            for (let i = 0; i < FRAME_COUNT; i++) {
                const img = new Image();
                const filename = `/sequence/${i.toString().padStart(3, '0')}.png`;

                const promise = new Promise<void>((resolve) => {
                    img.onload = () => resolve();
                    img.onerror = () => resolve();
                });

                img.src = filename;
                loadedImages.push(img);
                imagePromises.push(promise);
            }

            await Promise.all(imagePromises);
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    const renderFrame = (index: number) => {
        if (!canvasRef.current || !images[index] || !isLoaded) return;

        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;

        const canvas = canvasRef.current;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const img = images[index];

        // Scale to cover
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Ideally redraw here, but we need current index.
                // We rely on scroll update or next frame.
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(latest * FRAME_COUNT)
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    useEffect(() => {
        if (isLoaded) requestAnimationFrame(() => renderFrame(0));
    }, [isLoaded]);

    return (
        <div className="absolute inset-0 h-full w-full bg-[#121212]">
            <canvas
                ref={canvasRef}
                className="block h-full w-full object-cover"
            />
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    Loading...
                </div>
            )}
        </div>
    );
}
