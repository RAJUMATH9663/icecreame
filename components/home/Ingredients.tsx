"use client";

import { motion } from "framer-motion";
import { Sparkles, MapPin } from "lucide-react";

const INGREDIENTS = [
  {
    emoji: "🍓",
    name: "Mahabaleshwar Berries",
    origin: "Western Ghats, India",
    desc: "Picked at peak sunrise ripeness for tart sweetness.",
    color: "#ffe4e6",
    glow: "rgba(251, 113, 133, 0.3)",
  },
  {
    emoji: "🥭",
    name: "Alphonso King Mango",
    origin: "Ratnagiri, Maharashtra",
    desc: "100% pure pulp from heritage coastal groves.",
    color: "#fef3c7",
    glow: "rgba(245, 158, 11, 0.3)",
  },
  {
    emoji: "🥜",
    name: "Sicilian Pistachios",
    origin: "Bronte, Mount Etna",
    desc: "Volcanic soil mineral richness, slow wood-roasted.",
    color: "#ecfccb",
    glow: "rgba(132, 204, 22, 0.3)",
  },
  {
    emoji: "🍫",
    name: "Belgian Noir Cru",
    origin: "Callebaut, Belgium",
    desc: "70% single origin cocoa beans conched 72 hours.",
    color: "#ffedd5",
    glow: "rgba(120, 53, 15, 0.3)",
  },
  {
    emoji: "🌿",
    name: "Organic Farm Cream",
    origin: "Grass-Fed Dairy Farms",
    desc: "Rich 38% butterfat whole milk for silk texture.",
    color: "#e0f2fe",
    glow: "rgba(14, 165, 233, 0.3)",
  },
];

export function Ingredients() {
  return (
    <section className="relative -mt-12 md:-mt-20 z-45 pt-24 pb-32 bg-gradient-to-b from-[#fffaf2] via-[#fff4ec] to-[#feeddb] rounded-t-[3.5rem] md:rounded-t-[6rem] shadow-[0_-35px_80px_rgba(44,33,29,0.08)] border-t-2 border-white">
      {/* Overlapping Floating Connector Badge */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          whileHover={{ scale: 1.1, y: -3 }}
          className="px-6 py-2.5 rounded-full bg-amber-900 text-amber-100 text-xs font-black tracking-widest uppercase shadow-2xl border-2 border-white flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Section 04 • Pure Ingredients</span>
        </motion.div>
      </div>

      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-extrabold text-amber-800 bg-amber-100 px-3.5 py-1.5 rounded-full mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> Direct Farm Sourcing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="display text-5xl md:text-7xl font-bold text-[#2c211d]"
          >
            Good Stuff Inside.
          </motion.h2>
          <p className="mt-4 text-base text-[#2c211d]/75 font-normal">
            We travel to origin farms and master estates to bring you pure, unadulterated ingredients.
          </p>
        </div>

        {/* 3D Ingredients Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 perspective-1000">
          {INGREDIENTS.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{
                scale: 1.06,
                y: -8,
                boxShadow: `0 20px 30px -10px ${item.glow}`,
              }}
              className="rounded-[2.2rem] bg-white p-6 border border-white/80 shadow-md text-center flex flex-col justify-between items-center transition-all duration-300"
            >
              <div
                className="w-20 h-20 rounded-3xl grid place-items-center text-5xl mb-4 shadow-inner"
                style={{ backgroundColor: item.color }}
              >
                {item.emoji}
              </div>

              <div>
                <h3 className="font-bold text-base text-[#2c211d] leading-tight">{item.name}</h3>
                <p className="text-[11px] font-semibold text-emerald-700 flex items-center justify-center gap-1 mt-1.5">
                  <MapPin className="w-3 h-3" /> {item.origin}
                </p>
                <p className="text-xs text-[#2c211d]/70 mt-2.5 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-black/5 w-full text-[10px] uppercase font-bold tracking-widest text-[#2c211d]/50">
                100% Traceable
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}