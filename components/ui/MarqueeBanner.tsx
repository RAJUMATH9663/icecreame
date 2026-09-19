"use client";

import { motion } from "framer-motion";

export function MarqueeBanner() {
  const words = [
    "🍨 FRESH CHURNED DAILY",
    "🍓 MAHABALESHWAR BERRIES",
    "🍫 SINGLE ORIGIN CALLEBAUT",
    "🥜 SICILIAN BRONTE PISTACHIOS",
    "🌿 100% ORGANIC FARM CREAM",
    "✨ ZERO PRESERVATIVES",
    "🍦 ARTISAN SMALL BATCH",
    "🥭 RATNAGIRI ALPHONSO",
  ];

  return (
    <div className="relative py-12 overflow-hidden select-none">
      {/* Background overlapping tilted ribbons */}
      <div className="relative -rotate-2 transform scale-105 z-10">
        <div className="bg-[#2c211d] text-[#fffaf2] py-4 shadow-2xl border-y border-white/10 flex items-center">
          <div className="animate-marquee whitespace-nowrap flex gap-8 items-center text-sm md:text-base font-bold tracking-widest uppercase">
            {[...words, ...words].map((item, idx) => (
              <span key={idx} className="flex items-center gap-8">
                <span>{item}</span>
                <span className="text-pink-400">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative rotate-1 transform scale-105 -mt-6 z-20">
        <div className="bg-gradient-to-r from-[#f7b7c8] via-[#ffd8c2] to-[#c8d9b4] text-[#2c211d] py-3.5 shadow-xl border-y border-black/10 flex items-center">
          <div className="animate-marquee-reverse whitespace-nowrap flex gap-8 items-center text-xs md:text-sm font-extrabold tracking-widest uppercase">
            {[...words, ...words].map((item, idx) => (
              <span key={idx} className="flex items-center gap-8">
                <span>{item}</span>
                <span className="text-[#2c211d]/60">★</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
