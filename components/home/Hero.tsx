"use client";

import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useRef, MouseEvent } from "react";
import { Sparkles, ArrowRight, Star, Heart, Award, Flame } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const HERO_HEROES = [
  {
    id: "strawberry",
    name: "Strawberry Cloud",
    subtitle: "Sweet Strawberry & Velvet Cream",
    emoji: "🍓",
    secondEmoji: "🍨",
    color: "#f43f5e",
    gradient: "from-[#ffe4e6] via-[#fecdd3] to-[#fb7185]",
    shadow: "rgba(244, 63, 94, 0.4)",
    badge: "Most Loved",
    price: "₹180",
    origin: "Mahabaleshwar Farms",
    accent: "#ffe4e6",
  },
  {
    id: "mango",
    name: "Alphonso Sunshine",
    subtitle: "Sun-ripened Ratnagiri Mango",
    emoji: "🥭",
    secondEmoji: "🍧",
    color: "#f59e0b",
    gradient: "from-[#fef3c7] via-[#fde68a] to-[#f59e0b]",
    shadow: "rgba(245, 158, 11, 0.4)",
    badge: "Seasonal Pick",
    price: "₹190",
    origin: "Ratnagiri Gold",
    accent: "#fef3c7",
  },
  {
    id: "pistachio",
    name: "Sicilian Pistachio",
    subtitle: "Bronte Pistachio & Wild Honey",
    emoji: "🥜",
    secondEmoji: "🍦",
    color: "#65a30d",
    gradient: "from-[#ecfccb] via-[#d9f99d] to-[#84cc16]",
    shadow: "rgba(101, 163, 13, 0.4)",
    badge: "Chef's Reserve",
    price: "₹220",
    origin: "Mount Etna, Sicily",
    accent: "#ecfccb",
  },
  {
    id: "chocolate",
    name: "Belgian Noir 70%",
    subtitle: "Single-origin Dark Chocolate",
    emoji: "🍫",
    secondEmoji: "🍨",
    color: "#78350f",
    gradient: "from-[#fef3c7] via-[#fed7aa] to-[#9a3412]",
    shadow: "rgba(120, 53, 15, 0.4)",
    badge: "Pure Indulgence",
    price: "₹200",
    origin: "Callebaut, Belgium",
    accent: "#ffedd5",
  },
];

export function Hero() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeFlavor = HERO_HEROES[selectedIdx];
  const [liked, setLiked] = useState(false);

  // 3D Tilt Physics
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 260 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [18, -18]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), springConfig);
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-8 pb-16 overflow-hidden">
      {/* Background ambient glowing spheres */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#f7b7c8]/30 rounded-full blur-3xl animate-pulse-glow pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-[#c8d9b4]/25 rounded-full blur-3xl animate-pulse-glow pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#ffd8c2]/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typography and Action Elements */}
        <motion.div
          className="lg:col-span-6 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Overlapping Pill Badge */}
          <motion.div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-white/60 shadow-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-[#2c211d]">
              Artisan Gelato & Ice Cream
            </span>
            <span className="bg-pink-100 text-pink-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
              EST. 2026
            </span>
          </motion.div>

          {/* Overlapping 3D Display Headline */}
          <div className="relative">
            <motion.h1
              className="display text-[clamp(3.5rem,7.5vw,7.5rem)] leading-[0.88] font-black text-[#2c211d] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              SCOOP <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#e8829d] via-[#f59e0b] to-[#78350f]">
                HAPPINESS.
                <motion.span
                  className="absolute -top-3 -right-6 text-3xl md:text-4xl"
                  animate={{ rotate: [0, 20, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  ✨
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-[#2c211d]/80 max-w-lg leading-relaxed font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crafted in micro-batches with 100% grass-fed farm dairy, sun-ripened orchard fruits, and pure culinary artistry.
            </motion.p>
          </div>

          {/* Interactive Flavor Selector Pills */}
          <div className="pt-2">
            <p className="text-xs uppercase font-bold tracking-wider text-[#2c211d]/60 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" /> Switch Flavor Preview:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {HERO_HEROES.map((flavor, idx) => (
                <motion.button
                  key={flavor.id}
                  onClick={() => setSelectedIdx(idx)}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 border ${
                    selectedIdx === idx
                      ? "bg-[#2c211d] text-white border-[#2c211d] shadow-lg"
                      : "bg-white/70 text-[#2c211d] border-black/10 hover:bg-white"
                  }`}
                >
                  <span>{flavor.emoji}</span>
                  <span>{flavor.name.split(" ")[0]}</span>
                  {selectedIdx === idx && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full border-2 border-pink-400 pointer-events-none"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Action CTA Buttons with Magnetic Physics */}
          <motion.div
            className="flex flex-wrap items-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <MagneticButton strength={25}>
              <Link
                href="/flavors"
                className="group relative inline-flex items-center gap-3 bg-[#2c211d] text-[#fffaf2] px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase overflow-hidden shadow-2xl transition-all duration-300 hover:bg-[#4a3832]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore All Flavors
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-amber-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Link>
            </MagneticButton>

            <MagneticButton strength={25}>
              <Link
                href="/cart"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-bold text-sm tracking-wider uppercase glass-panel border border-[#2c211d]/20 text-[#2c211d] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>🍦 Build Your Cone</span>
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Social Proof Overlapping Row */}
          <div className="flex items-center gap-4 pt-4 border-t border-black/5">
            <div className="flex -space-x-3">
              {["🍨", "🍓", "🍫", "🥜", "🍦"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-white shadow-md border-2 border-[#fffaf2] grid place-items-center text-sm"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="text-xs font-black text-[#2c211d] ml-1.5">4.9/5</span>
              </div>
              <p className="text-xs text-[#2c211d]/70 font-medium">Over 24,000+ happy scoops served</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Interactive Showcase Card & Floating Orbit Layers */}
        <div className="lg:col-span-6 flex justify-center perspective-1000">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-[460px] aspect-[4/4.5] rounded-[3.5rem] glass-panel p-8 shadow-2xl transition-shadow duration-500 hover:shadow-3d-pink cursor-grab active:cursor-grabbing select-none"
          >
            {/* Dynamic Specular Gloss Refraction */}
            <motion.div
              style={{
                background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 65%)`,
              }}
              className="absolute inset-0 rounded-[3.5rem] pointer-events-none z-30 opacity-40 mix-blend-overlay"
            />

            {/* Inner Gradient Pod */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlavor.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={`relative w-full h-full rounded-[2.8rem] bg-gradient-to-br ${activeFlavor.gradient} p-8 flex flex-col justify-between overflow-hidden shadow-inner`}
              >
                {/* Top Bar inside 3D Card */}
                <div className="flex justify-between items-start z-10">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-extrabold text-[#2c211d] shadow-sm">
                    <Flame className="w-3.5 h-3.5 text-pink-600" />
                    {activeFlavor.badge}
                  </div>

                  <button
                    onClick={() => setLiked(!liked)}
                    className="w-10 h-10 rounded-full bg-white/90 backdrop-blur grid place-items-center shadow-sm transition-transform active:scale-90"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        liked ? "fill-rose-500 text-rose-500" : "text-gray-700"
                      }`}
                    />
                  </button>
                </div>

                {/* Main 3D Floating Scoop Centerpiece with Drag gesture */}
                <div className="relative my-auto flex flex-col items-center justify-center">
                  {/* Floating shadow under emoji */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.25, 0.45, 0.25],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-36 h-8 bg-black/20 rounded-full blur-md -mb-6"
                  />

                  {/* Giant 3D Scoop Emoji with Bounce and Interactive Drag */}
                  <motion.div
                    key={`emoji-${activeFlavor.id}`}
                    drag
                    dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
                    dragElastic={0.4}
                    initial={{ y: 30, scale: 0.8, rotate: -15 }}
                    animate={{
                      y: [0, -18, 0],
                      rotate: [0, 6, -6, 0],
                      scale: 1,
                    }}
                    transition={{
                      y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                      scale: { duration: 0.5 },
                    }}
                    className="text-[9rem] md:text-[10.5rem] leading-none filter drop-shadow-2xl translate-z-60 cursor-grab active:cursor-grabbing select-none"
                  >
                    {activeFlavor.secondEmoji}
                  </motion.div>

                  {/* Secondary Floating Berry/Chocolate Accent */}
                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                      rotate: [0, -12, 12, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 text-5xl filter drop-shadow-lg pointer-events-none"
                  >
                    {activeFlavor.emoji}
                  </motion.div>
                </div>

                {/* Bottom Card Info */}
                <div className="relative z-10 glass-panel-dark text-white p-4 rounded-2xl flex items-center justify-between border border-white/20 shadow-xl">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-pink-300 font-bold">
                      {activeFlavor.origin}
                    </p>
                    <h3 className="font-bold text-base leading-tight mt-0.5">{activeFlavor.name}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs opacity-75 font-normal">Per Scoop</span>
                    <p className="text-lg font-black text-amber-300">{activeFlavor.price}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Overlapping Floating Element 1: Rotating 3D Artisan Badge */}
            <motion.div
              className="absolute -top-6 -right-6 z-40 bg-[#2c211d] text-[#fffaf2] w-24 h-24 rounded-full shadow-2xl flex flex-col items-center justify-center p-2 border-4 border-[#fffaf2]"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              whileHover={{ scale: 1.15 }}
            >
              <Award className="w-5 h-5 text-amber-400 mb-0.5" />
              <span className="text-[9px] font-black tracking-widest uppercase text-center leading-tight">
                100% REAL DAIRY
              </span>
            </motion.div>

            {/* Overlapping Floating Element 2: Glass Review Bubble */}
            <motion.div
              className="absolute -bottom-8 -left-8 z-40 glass-panel p-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-white/90 max-w-[240px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-400 to-amber-300 grid place-items-center text-lg shadow-md shrink-0">
                ✨
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="text-[11px] font-black text-[#2c211d]">5.0 Masterpiece</span>
                </div>
                <p className="text-[11px] text-[#2c211d]/80 font-medium truncate">
                  "Silkiest texture in town!"
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}