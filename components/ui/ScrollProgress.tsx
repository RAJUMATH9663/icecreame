"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1.5 bg-black/5 pointer-events-none">
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="h-full bg-gradient-to-r from-pink-500 via-amber-400 to-emerald-400 shadow-sm"
      />
    </div>
  );
}
