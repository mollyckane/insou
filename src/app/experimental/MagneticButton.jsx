'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const MagneticBlobCursor = () => {
    const cursorRef = useRef(null);

    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const springX = useSpring(x, { stiffness: 250, damping: 20 });
    const springY = useSpring(y, { stiffness: 250, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [x, y]);

    return (
        <motion.div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none"
            style={{
                x: springX,
                y: springY,
                zIndex: 5,
            }}
        >
            <div
                className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-sky-200
                   opacity-70 mix-blend-screen blur-xl"
            />
        </motion.div>
    );
};

export default MagneticBlobCursor;