"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Sprinkle = {
  id: number;
  emoji: string;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  rotate: number;
};

const SPRINKLE_EMOJIS = ["✨", "🍓", "🍫", "🥜", "🍦", "🌸", "🍒", "🍨", "💫", "🍯"];

export function FloatingSprinkles() {
  const [sprinkles, setSprinkles] = useState<Sprinkle[]>([]);

  useEffect(() => {
    // Generate deterministic sprinkles on mount to avoid hydration mismatch
    const items: Sprinkle[] = Array.from({ length: 14 }, (_, i) => ({
      id: i,
      emoji: SPRINKLE_EMOJIS[i % SPRINKLE_EMOJIS.length],
      size: 18 + (i % 5) * 6,
      x: 5 + ((i * 7) % 90),
      y: 8 + ((i * 9) % 85),
      duration: 10 + (i % 6) * 3,
      delay: (i * 0.7) % 4,
      rotate: (i * 45) % 360,
    }));
    setSprinkles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-40">
      {sprinkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            fontSize: `${s.size}px`,
          }}
          animate={{
            y: [0, -35, 0],
            x: [0, (s.id % 2 === 0 ? 25 : -25), 0],
            rotate: [s.rotate, s.rotate + 180, s.rotate + 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {s.emoji}
        </motion.div>
      ))}
    </div>
  );
}
