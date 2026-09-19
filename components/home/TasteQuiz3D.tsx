"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, RotateCcw, Heart, Check, ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import Link from "next/link";

const MOODS = [
  { id: "cheerful", label: "Sunny & Sweet", emoji: "☀️", matchSlug: "mango-sunshine" },
  { id: "decadent", label: "Midnight Cravings", emoji: "🌙", matchSlug: "belgian-chocolate" },
  { id: "fresh", label: "Breezy & Berry", emoji: "🍓", matchSlug: "strawberry-cloud" },
  { id: "gourmet", label: "Chef Connoisseur", emoji: "👑", matchSlug: "pistachio-dream" },
];

const TEXTURES = [
  { id: "velvet", label: "Silky Smooth Melt", emoji: "🍨" },
  { id: "crunchy", label: "Crunchy Chunky Bits", emoji: "🍪" },
  { id: "swirl", label: "Gourmet Ribbon Swirl", emoji: "🍯" },
];

export function TasteQuiz3D() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedTexture, setSelectedTexture] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [added, setAdded] = useState(false);

  const matchedProduct =
    products.find((p) => p.slug === (MOODS.find((m) => m.id === selectedMood)?.matchSlug)) ||
    products[0];

  const handleReveal = () => {
    if (selectedMood && selectedTexture) {
      setIsRevealed(true);
    }
  };

  const handleReset = () => {
    setSelectedMood(null);
    setSelectedTexture(null);
    setIsRevealed(false);
    setAdded(false);
  };

  return (
    <section className="relative -mt-12 md:-mt-20 z-48 pt-24 pb-32 bg-gradient-to-b from-[#feeddb] via-[#fff5f5] to-[#ffd8c2] rounded-t-[3.5rem] md:rounded-t-[6rem] shadow-[0_-35px_80px_rgba(44,33,29,0.09)] border-t-2 border-white">
      {/* Overlapping Floating Connector Badge */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          whileHover={{ scale: 1.1, y: -3 }}
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-700 to-pink-600 text-white text-xs font-black tracking-widest uppercase shadow-2xl border-2 border-white flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Interactive 3D Taste Matcher</span>
        </motion.div>
      </div>

      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-100 text-purple-900 text-xs font-black uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" /> AI Flavor Matcher
          </span>
          <h2 className="display text-4xl md:text-6xl font-black text-[#2c211d]">
            Find Your Soul Scoop.
          </h2>
          <p className="mt-3 text-base text-[#2c211d]/75 max-w-md mx-auto">
            Select your mood and favorite texture to let our flavor algorithm reveal your personalized handcrafted scoop match.
          </p>
        </div>

        <div className="perspective-1000">
          <AnimatePresence mode="wait">
            {!isRevealed ? (
              <motion.div
                key="quiz-card"
                initial={{ opacity: 0, rotateX: 15, y: 30 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, rotateX: -90 }}
                transition={{ duration: 0.6 }}
                className="glass-panel rounded-[3rem] p-8 md:p-12 border-2 border-white shadow-2xl space-y-8"
              >
                {/* Step 1: Mood */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#2c211d] mb-3">
                    Step 1: What is your current vibe?
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {MOODS.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setSelectedMood(m.id)}
                        className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center gap-2 ${
                          selectedMood === m.id
                            ? "bg-[#2c211d] text-white border-[#2c211d] shadow-lg scale-105"
                            : "bg-white/80 text-[#2c211d] border-black/10 hover:bg-white"
                        }`}
                      >
                        <span className="text-3xl">{m.emoji}</span>
                        <span className="text-xs font-bold">{m.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Texture */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#2c211d] mb-3">
                    Step 2: Desired texture profile:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {TEXTURES.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setSelectedTexture(t.id)}
                        className={`p-4 rounded-2xl border text-center transition-all flex items-center justify-center gap-3 ${
                          selectedTexture === t.id
                            ? "bg-[#2c211d] text-white border-[#2c211d] shadow-lg scale-105"
                            : "bg-white/80 text-[#2c211d] border-black/10 hover:bg-white"
                        }`}
                      >
                        <span className="text-3xl">{t.emoji}</span>
                        <span className="text-xs font-bold">{t.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Match Action */}
                <div className="pt-2">
                  <motion.button
                    disabled={!selectedMood || !selectedTexture}
                    onClick={handleReveal}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl ${
                      selectedMood && selectedTexture
                        ? "bg-[#2c211d] text-[#fffaf2] hover:bg-[#4a3832] cursor-pointer"
                        : "bg-black/10 text-black/30 cursor-not-allowed"
                    }`}
                  >
                    <span>Reveal My 100% Soul Flavor Match</span>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result-card"
                initial={{ opacity: 0, rotateY: 90, scale: 0.9 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="relative rounded-[3.5rem] bg-gradient-to-br from-white via-[#fff0f3] to-[#ffd8c2] p-8 md:p-12 border-4 border-white shadow-2xl flex flex-col md:flex-row items-center gap-8 justify-between overflow-hidden"
              >
                <div className="relative z-10 space-y-4 max-w-md">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider">
                    <Check className="w-3.5 h-3.5" /> 99.4% Taste Match Found
                  </div>

                  <h3 className="display text-4xl md:text-5xl font-black text-[#2c211d]">
                    {matchedProduct.name}
                  </h3>

                  <p className="text-sm text-[#2c211d]/80 leading-relaxed font-normal">
                    {matchedProduct.description}
                  </p>

                  <div className="flex items-baseline gap-3 pt-2">
                    <span className="display text-3xl font-black text-[#2c211d]">
                      ₹{matchedProduct.price}
                    </span>
                    <span className="text-xs text-[#2c211d]/60">per signature scoop</span>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <motion.button
                      onClick={() => setAdded(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#2c211d] text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
                    >
                      {added ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" /> Added to Cart!
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" /> Order Soul Scoop
                        </>
                      )}
                    </motion.button>

                    <button
                      onClick={handleReset}
                      className="px-5 py-3.5 rounded-full glass-panel border border-black/10 text-[#2c211d] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-white"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Retake Quiz
                    </button>
                  </div>
                </div>

                {/* 3D Giant Emoji Stage */}
                <div className="relative w-64 h-64 rounded-[2.5rem] bg-white/80 p-6 shadow-xl border-2 border-white grid place-items-center shrink-0">
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 8, -8, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-9xl filter drop-shadow-2xl select-none"
                  >
                    {matchedProduct.emoji}
                  </motion.div>
                  <div className="w-32 h-6 bg-black/15 rounded-full blur-md -mt-4" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
