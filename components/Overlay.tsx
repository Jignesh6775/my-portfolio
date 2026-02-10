'use client';

import { motion, useTransform, MotionValue } from 'framer-motion';

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {

    // Section 1: 0% - 20%
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

    // Section 2: 25% - 50%
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.55], [50, -50]);

    // Section 3: 55% - 85%
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.9], [50, -50]);

    return (
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between">
            {/* Section 1 - Moved up slightly (65vh instead of 75vh) */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex items-start justify-start px-12 md:px-32 pt-[65vh]"
            >
                <div>
                    <h1 className="text-6xl font-bold tracking-tighter md:text-9xl text-white">
                        Tejasvi
                    </h1>
                    {/* Lighter sub-text */}
                    <p className="mt-4 text-xl md:text-3xl text-gray-200 font-light">
                        Software Engineer & Java Specialist
                    </p>
                </div>
            </motion.div>

            {/* Section 2 - Left */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex items-center justify-start px-12 md:px-32"
            >
                <h2 className="text-4xl font-semibold md:text-7xl max-w-4xl leading-tight text-white">
                    Architecting scalable <br />
                    <span className="text-blue-500">backend systems.</span>
                </h2>
            </motion.div>

            {/* Section 3 - Right */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex items-center justify-end px-12 md:px-32"
            >
                <h2 className="text-right text-4xl font-semibold md:text-7xl max-w-4xl leading-tight text-white">
                    Delivering high-performance <br />
                    <span className="text-purple-500">enterprise solutions.</span>
                </h2>
            </motion.div>
        </div>
    );
}
