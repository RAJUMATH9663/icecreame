"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Trash2, Sparkles, ShoppingBag, Check } from "lucide-react";

type ScoopItem = {
  id: string;
  name: string;
  color: string;
  emoji: string;
  price: number;
};

const AVAILABLE_SCOOPS: ScoopItem[] = [
  { id: "s1", name: "Strawberry Cloud", color: "#fb7185", emoji: "🍓", price: 70 },
  { id: "s2", name: "Belgian Chocolate", color: "#78350f", emoji: "🍫", price: 80 },
  { id: "s3", name: "Sicilian Pistachio", color: "#84cc16", emoji: "🥜", price: 90 },
  { id: "s4", name: "Alphonso Sunshine", color: "#f59e0b", emoji: "🥭", price: 75 },
  { id: "s5", name: "Salted Caramel", color: "#d97706", emoji: "🍮", price: 85 },
];

const BASES = [
  { id: "waffle", name: "Crisp Waffle Cone", icon: "🍦", price: 40 },
  { id: "chocolate", name: "Choco Dipped Cone", icon: "🍫", price: 60 },
  { id: "cup", name: "Artisan Crystal Cup", icon: "🍨", price: 30 },
];

const TOPPINGS = [
  { id: "cherry", name: "Glacé Cherry", icon: "🍒", price: 20 },
  { id: "sprinkles", name: "Rainbow Sprinkles", icon: "✨", price: 15 },
  { id: "honey", name: "Wild Honey Drizzle", icon: "🍯", price: 25 },
  { id: "nuts", name: "Toasted Pistachios", icon: "🥜", price: 30 },
];

export function ScoopStacker3D() {
  const [selectedBase, setSelectedBase] = useState(BASES[0]);
  const [stackedScoops, setStackedScoops] = useState<ScoopItem[]>([
    AVAILABLE_SCOOPS[0],
    AVAILABLE_SCOOPS[2],
  ]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>(["cherry"]);
  const [addedMessage, setAddedMessage] = useState(false);

  const addScoop = (scoop: ScoopItem) => {
    if (stackedScoops.length >= 4) return;
    setStackedScoops([...stackedScoops, scoop]);
  };

  const removeScoop = (index: number) => {
    setStackedScoops(stackedScoops.filter((_, i) => i !== index));
  };

  const toggleTopping = (toppingId: string) => {
    if (selectedToppings.includes(toppingId)) {
      setSelectedToppings(selectedToppings.filter((id) => id !== toppingId));
    } else {
      setSelectedToppings([...selectedToppings, toppingId]);
    }
  };

  const toppingsPrice = selectedToppings.reduce((total, id) => {
    const topping = TOPPINGS.find((t) => t.id === id);
    return total + (topping?.price || 0);
  }, 0);

  const scoopsPrice = stackedScoops.reduce((sum, item) => sum + item.price, 0);
  const totalPrice = selectedBase.price + scoopsPrice + toppingsPrice;

  const handleOrder = () => {
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2500);
  };

  return (
    <section className="relative -mt-12 md:-mt-20 z-30 pt-20 pb-28 bg-gradient-to-b from-[#fff7ed] via-[#fffdf9] to-[#fff5f5] rounded-t-[3.5rem] md:rounded-t-[6rem] shadow-[0_-30px_70px_rgba(44,33,29,0.09)] border-t-2 border-white">
      {/* Overlapping Floating Connector Badge */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-40">
        <motion.div
          whileHover={{ scale: 1.1, y: -3 }}
          className="px-6 py-2.5 rounded-full bg-[#2c211d] text-[#fffaf2] text-xs font-black tracking-widest uppercase shadow-2xl border-2 border-white flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span>Section 01 • 3D Interactive Lab</span>
        </motion.div>
      </div>

      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-black tracking-widest uppercase mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-3.5 h-3.5" /> 3D Customizer
          </motion.div>
          <h2 className="display text-5xl md:text-7xl font-bold text-[#2c211d]">
            Build Your Dream Cone.
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#2c211d]/75 font-normal">
            Stack your favorite artisanal gelato flavors, choose handcrafted waffle cones, and garnish with gourmet toppings in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: 3D Cone & Stack Visualizer Stage */}
          <div className="lg:col-span-6 flex justify-center perspective-1000">
            <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-[3rem] bg-gradient-to-b from-[#fff0f3] via-[#fff9ef] to-[#f0fdf4] border-2 border-white/80 p-8 shadow-2xl flex flex-col items-center justify-between">
              {/* Top Badge */}
              <div className="w-full flex justify-between items-center text-xs font-bold text-[#2c211d]/70">
                <span className="bg-white/80 px-3 py-1 rounded-full shadow-sm">
                  Layer Count: {stackedScoops.length}/4
                </span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full shadow-sm">
                  Freshly Handcrafted
                </span>
              </div>

              {/* 3D Stack Stage */}
              <div className="relative flex flex-col-reverse items-center justify-center my-auto w-full min-h-[320px]">
                {/* Cone / Cup Base */}
                <motion.div
                  layout
                  className="relative z-10 text-8xl md:text-9xl filter drop-shadow-xl select-none"
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  {selectedBase.icon}
                </motion.div>

                {/* Stacked Scoops with Bouncy Spring Physics */}
                <div className="flex flex-col-reverse items-center -space-y-12 z-20">
                  <AnimatePresence>
                    {stackedScoops.map((scoop, index) => (
                      <motion.div
                        key={`${scoop.id}-${index}`}
                        initial={{ scale: 0.2, y: -100, opacity: 0, rotate: index % 2 === 0 ? -25 : 25 }}
                        animate={{ scale: 1, y: 0, opacity: 1, rotate: 0 }}
                        exit={{ scale: 0.2, y: -60, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 18,
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        onClick={() => removeScoop(index)}
                        className="group relative cursor-pointer"
                      >
                        <div className="text-7xl md:text-8xl filter drop-shadow-2xl select-none transform hover:-translate-y-1 transition-transform">
                          {scoop.emoji}
                        </div>

                        {/* Remove Tooltip */}
                        <span className="absolute -top-3 -right-2 bg-rose-500 text-white p-1 rounded-full text-[10px] opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                          <Trash2 className="w-3 h-3" />
                        </span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Overlapping Floating Toppings */}
                <div className="absolute -top-6 flex items-center gap-2 z-30 pointer-events-none">
                  {selectedToppings.map((topId) => {
                    const topping = TOPPINGS.find((t) => t.id === topId);
                    return (
                      <motion.span
                        key={topId}
                        initial={{ scale: 0, y: -20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0 }}
                        className="text-3xl filter drop-shadow-md animate-bounce"
                      >
                        {topping?.icon}
                      </motion.span>
                    );
                  })}
                </div>
              </div>

              {/* Price Preview Tally Bar */}
              <div className="w-full glass-panel-dark text-white p-4 rounded-2xl flex items-center justify-between border border-white/20 shadow-xl">
                <div>
                  <p className="text-[11px] text-pink-300 font-bold uppercase tracking-wider">
                    Custom Creation
                  </p>
                  <p className="text-sm font-semibold text-white/90">
                    {stackedScoops.length} Scoops + {selectedBase.name.split(" ")[0]}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] opacity-75">Total Price</span>
                  <p className="text-xl font-black text-amber-300">₹{totalPrice}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Customization Controls */}
          <div className="lg:col-span-6 space-y-8">
            {/* Step 1: Base Selection */}
            <div className="glass-panel p-6 rounded-3xl border border-white/80 shadow-md">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#2c211d] mb-3 flex items-center justify-between">
                <span>1. Choose Base / Vessel</span>
                <span className="text-xs font-semibold text-pink-600">Selected: {selectedBase.name}</span>
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {BASES.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBase(b)}
                    className={`p-3.5 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center gap-1.5 ${
                      selectedBase.id === b.id
                        ? "bg-[#2c211d] text-white border-[#2c211d] shadow-lg scale-[1.02]"
                        : "bg-white/80 text-[#2c211d] border-black/10 hover:bg-white"
                    }`}
                  >
                    <span className="text-3xl">{b.icon}</span>
                    <span className="text-xs font-bold">{b.name}</span>
                    <span className="text-[11px] opacity-75 font-medium">+₹{b.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Flavor Scoops */}
            <div className="glass-panel p-6 rounded-3xl border border-white/80 shadow-md">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#2c211d] mb-3 flex items-center justify-between">
                <span>2. Tap to Add Flavors (Max 4)</span>
                <span className="text-xs font-semibold text-pink-600">
                  {stackedScoops.length}/4 Scoops
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {AVAILABLE_SCOOPS.map((scoop) => {
                  const isFull = stackedScoops.length >= 4;
                  return (
                    <motion.button
                      key={scoop.id}
                      onClick={() => addScoop(scoop)}
                      disabled={isFull}
                      whileHover={!isFull ? { scale: 1.04, y: -2 } : {}}
                      whileTap={!isFull ? { scale: 0.95 } : {}}
                      className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                        isFull
                          ? "opacity-50 cursor-not-allowed bg-gray-100 border-gray-200"
                          : "bg-white/90 border-black/10 hover:border-pink-300 hover:shadow-md"
                      }`}
                    >
                      <span className="text-2xl">{scoop.emoji}</span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#2c211d] truncate">{scoop.name}</p>
                        <p className="text-[11px] text-pink-600 font-bold">+₹{scoop.price}</p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Gourmet Toppings */}
            <div className="glass-panel p-6 rounded-3xl border border-white/80 shadow-md">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#2c211d] mb-3">
                3. Extra Gourmet Garnishes
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {TOPPINGS.map((topping) => {
                  const isSelected = selectedToppings.includes(topping.id);
                  return (
                    <button
                      key={topping.id}
                      onClick={() => toggleTopping(topping.id)}
                      className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-1 transition-all ${
                        isSelected
                          ? "bg-pink-100 border-pink-400 text-pink-900 shadow-sm"
                          : "bg-white/80 border-black/10 text-[#2c211d] hover:bg-white"
                      }`}
                    >
                      <span className="text-2xl">{topping.icon}</span>
                      <span className="text-[11px] font-bold truncate w-full">{topping.name}</span>
                      <span className="text-[10px] text-pink-700 font-semibold">+₹{topping.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <motion.button
                onClick={handleOrder}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#2c211d] text-[#fffaf2] py-4 rounded-full font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 shadow-xl hover:bg-[#4a3832] transition-colors"
              >
                {addedMessage ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-400">Added to Scoop Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>Order Custom Creation (₹{totalPrice})</span>
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
