"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight, Clock, Flame } from "lucide-react";

export function SeasonalCollection() {
  return (
    <section className="relative -mt-12 md:-mt-20 z-50 pt-24 pb-32 bg-gradient-to-b from-[#ffd8c2] via-[#ffe4e6] to-[#fed7aa] rounded-t-[3.5rem] md:rounded-t-[6rem] shadow-[0_-35px_80px_rgba(244,63,94,0.15)] border-t-2 border-white">
      {/* Overlapping Floating Connector Badge */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          whileHover={{ scale: 1.1, y: -3 }}
          className="px-6 py-2.5 rounded-full bg-rose-900 text-rose-100 text-xs font-black tracking-widest uppercase shadow-2xl border-2 border-white flex items-center gap-2"
        >
          <Flame className="w-4 h-4 text-amber-400" />
          <span>Section 05 • Seasonal Vault</span>
        </motion.div>
      </div>

      <div className="container">
        <div className="relative rounded-[3.5rem] bg-white/70 backdrop-blur-md p-10 md:p-16 overflow-hidden shadow-2xl border-4 border-white">
          {/* Decorative Floating Blobs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-400/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-400/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#2c211d] text-amber-300 text-xs font-black uppercase tracking-widest shadow-md">
                  <Flame className="w-3.5 h-3.5 text-amber-400" /> Limited Batch 2026
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 text-[#2c211d] text-xs font-bold shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-pink-500" /> Only 14 Days Left
                </span>
              </div>

              <h2 className="display text-5xl md:text-7xl lg:text-8xl font-black text-[#2c211d] leading-[0.9]">
                SUMMER HAS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-amber-600 to-pink-600">
                  A NEW FLAVOR.
                </span>
              </h2>

              <p className="text-lg md:text-xl text-[#2c211d]/85 max-w-lg leading-relaxed font-medium">
                Alphonso Mango Sunshine, Wild Berry Mascarpone, Coconut Blossom Sorbet, and Smoked Sea Salt Caramel.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/flavors"
                  className="inline-flex items-center gap-3 bg-[#2c211d] text-[#fffaf2] px-9 py-4 rounded-full font-bold text-xs uppercase tracking-widest shadow-2xl hover:bg-[#4a3832] transition-all hover:scale-105"
                >
                  <span>Shop Seasonal Vault</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs font-bold text-[#2c211d]/70">
                  ⚡ Free artisan dry-ice pack included
                </span>
              </div>
            </div>

            {/* Right: 3D Layered Sundae Display */}
            <div className="lg:col-span-5 flex justify-center perspective-1000">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-[3rem] bg-white/95 backdrop-blur-md p-6 shadow-2xl border-4 border-white grid place-items-center">
                {/* Central Emoji */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[9rem] sm:text-[11rem] leading-none filter drop-shadow-2xl select-none"
                >
                  🍧
                </motion.div>

                {/* Floating satellite garnishes */}
                <motion.span
                  animate={{ y: [0, -10, 0], rotate: 360 }}
                  transition={{
                    y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  }}
                  className="absolute -top-4 -right-4 text-5xl filter drop-shadow-lg"
                >
                  🥭
                </motion.span>

                <motion.span
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 text-5xl filter drop-shadow-lg"
                >
                  🍓
                </motion.span>

                <motion.span
                  animate={{ rotate: [-10, 10, -10] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 -left-6 text-4xl filter drop-shadow-md"
                >
                  ✨
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}