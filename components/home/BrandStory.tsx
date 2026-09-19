"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, ShieldCheck, Award, Milk, Leaf } from "lucide-react";
import Link from "next/link";

const STATS = [
  { value: "100%", label: "Single-Farm Fresh Milk", icon: Milk },
  { value: "0g", label: "Artificial Flavors or Gums", icon: Leaf },
  { value: "24h", label: "Churned to Scoop Freshness", icon: Award },
  { value: "4.9★", label: "Average Customer Rating", icon: Heart },
];

export function BrandStory() {
  return (
    <section className="relative -mt-12 md:-mt-20 z-40 pt-24 pb-32 overflow-hidden bg-gradient-to-b from-[#e9f5db] via-[#dceec8] to-[#edf7e2] rounded-t-[3.5rem] md:rounded-t-[6rem] shadow-[0_-35px_80px_rgba(0,0,0,0.12)] border-t-2 border-white/60">
      {/* Overlapping Floating Connector Badge */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          whileHover={{ scale: 1.1, y: -3 }}
          className="px-6 py-2.5 rounded-full bg-emerald-900 text-emerald-100 text-xs font-black tracking-widest uppercase shadow-2xl border-2 border-white flex items-center gap-2"
        >
          <Leaf className="w-4 h-4 text-emerald-400" />
          <span>Section 03 • Our Philosophy</span>
        </motion.div>
      </div>

      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-[35rem] h-[35rem] bg-[#c8d9b4]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#ffd8c2]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container grid lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Overlapping 3D Polaroid & Artisan Cards */}
        <div className="lg:col-span-6 relative flex justify-center items-center perspective-1000 min-h-[460px]">
          {/* Card 1: Back tilt */}
          <motion.div
            initial={{ opacity: 0, rotate: -12, y: 40 }}
            whileInView={{ opacity: 1, rotate: -8, y: 0 }}
            whileHover={{ scale: 1.05, rotate: -3, zIndex: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-4 left-4 sm:left-12 w-64 sm:w-72 rounded-3xl bg-white p-5 shadow-2xl border-4 border-white cursor-pointer z-10 select-none"
          >
            <div className="aspect-[4/3] rounded-2xl bg-[#ffd8c2] grid place-items-center text-7xl shadow-inner">
              🥭
            </div>
            <p className="mt-3 font-bold text-xs uppercase tracking-wider text-[#2c211d]">
              Direct Orchard Sourcing
            </p>
            <p className="text-[11px] text-[#2c211d]/70">Ratnagiri Alphonso Groves • 2026 Batch</p>
          </motion.div>

          {/* Card 2: Center Front tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.08, rotate: 2, zIndex: 35 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative w-72 sm:w-80 rounded-[2.5rem] bg-[#2c211d] text-[#fffaf2] p-7 shadow-3d-cocoa border-4 border-white/40 cursor-pointer z-20 select-none"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs uppercase tracking-widest font-black text-pink-300">
                Slow Churn Magic
              </span>
              <span className="text-2xl">🍨</span>
            </div>
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-pink-500/30 to-amber-500/20 border border-white/20 grid place-items-center text-8xl">
              🍓
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold">100% Real Berry Fold</p>
                <p className="text-[10px] opacity-70">Slow-churned at -14°C</p>
              </div>
              <span className="bg-pink-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                Zero Air Fluff
              </span>
            </div>
          </motion.div>

          {/* Card 3: Bottom Right tilt */}
          <motion.div
            initial={{ opacity: 0, rotate: 14, y: 50 }}
            whileInView={{ opacity: 1, rotate: 10, y: 0 }}
            whileHover={{ scale: 1.05, rotate: 4, zIndex: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -bottom-4 right-4 sm:right-12 w-64 sm:w-72 rounded-3xl bg-white p-5 shadow-2xl border-4 border-white cursor-pointer z-10 select-none"
          >
            <div className="aspect-[4/3] rounded-2xl bg-[#c8d9b4] grid place-items-center text-7xl shadow-inner">
              🥜
            </div>
            <p className="mt-3 font-bold text-xs uppercase tracking-wider text-[#2c211d]">
              Sicilian Green Gold
            </p>
            <p className="text-[11px] text-[#2c211d]/70">Pure Bronte Pistachio Paste</p>
          </motion.div>

          {/* Floating Rotating Seal */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-6 -left-6 z-40 w-24 h-24 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 text-white grid place-items-center text-center p-2 shadow-xl border-2 border-white"
          >
            <Sparkles className="w-5 h-5 mb-0.5" />
            <span className="text-[8px] font-black uppercase tracking-widest leading-none">
              PURE ARTISAN CERTIFIED
            </span>
          </motion.div>
        </div>

        {/* Right Column: Philosophy & Live Stats */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-extrabold text-emerald-900 bg-emerald-100/90 px-3.5 py-1.5 rounded-full mb-3"
            >
              <ShieldCheck className="w-3.5 h-3.5" /> Handcrafted Heritage
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="display text-5xl md:text-7xl font-black text-[#2c211d] leading-none"
            >
              MADE SLOW. <br />
              <span className="text-emerald-800">SCOOPED HAPPY.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-[#2c211d]/85 leading-relaxed font-normal"
            >
              We believe ice cream should never be ordinary. By refusing stabilizers, artificial colors, and commercial syrups, we celebrate the true flavor of whole vanilla pods, slow-roasted nuts, and seasonal tree-ripened fruits.
            </motion.p>
          </div>

          {/* 4 Overlapping Metric Boxes with 3D Pop */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 grid place-items-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="display text-2xl font-black text-[#2c211d] leading-tight">
                      {stat.value}
                    </h4>
                    <p className="text-xs text-[#2c211d]/70 font-medium leading-tight mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div>
            <Link
              href="/our-story"
              className="inline-flex items-center gap-3 bg-[#2c211d] text-[#fffaf2] px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest shadow-xl hover:bg-[#4a3832] transition-colors"
            >
              <span>Read Our Full Story</span>
              <Sparkles className="w-4 h-4 text-amber-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}