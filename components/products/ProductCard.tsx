"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useRef, MouseEvent } from "react";
import type { Product } from "@/types/product";
import { Star, Plus, Check, Flame } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [added, setAdded] = useState(false);

  // 3D Tilt calculation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 220 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
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

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const bgGradient =
    product.bgPastel || "from-[#ffe4e6] via-[#fecdd3] to-[#fb7185]/20";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="perspective-1000 group relative"
    >
      <Link href={`/products/${product.slug}`} className="block">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative bg-white/80 rounded-[2.5rem] p-6 border border-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:-translate-y-2 backdrop-blur-md"
        >
          {/* Cursor Glare Lighting Layer */}
          <motion.div
            style={{
              background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 60%)`,
            }}
            className="absolute inset-0 rounded-[2.5rem] pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />

          {/* Top Info / Badge Layer */}
          <div className="flex justify-between items-center mb-4 z-20 relative">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-xs font-black shadow-sm text-[#2c211d]">
              {product.tag ? (
                <>
                  <Flame className="w-3.5 h-3.5 text-pink-500" />
                  <span>{product.tag}</span>
                </>
              ) : (
                <span className="capitalize">{product.category}</span>
              )}
            </div>

            <div className="flex items-center gap-1 bg-white/95 px-2.5 py-1 rounded-full text-xs font-bold text-amber-500 shadow-sm">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-[#2c211d]">{product.rating}</span>
            </div>
          </div>

          {/* 3D Visual Stage with Floating Emoji Pod */}
          <div
            className={`relative aspect-square rounded-[2rem] bg-gradient-to-br ${bgGradient} grid place-items-center overflow-hidden border border-white/60 shadow-inner`}
          >
            {/* Ambient inner blur glow */}
            <div
              className="absolute w-28 h-28 rounded-full blur-xl opacity-60"
              style={{ backgroundColor: product.color || "#f7b7c8" }}
            />

            {/* 3D Popping Emoji with depth translateZ */}
            <motion.div
              className="relative text-8xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 select-none filter drop-shadow-2xl"
              style={{ transform: "translateZ(40px)" }}
            >
              {product.emoji}
            </motion.div>

            {/* Floating Topping Garnish badge if available */}
            {product.toppings && product.toppings[0] && (
              <div className="absolute bottom-3 left-3 right-3 bg-white/80 backdrop-blur-md py-1.5 px-3 rounded-full text-[11px] font-semibold text-[#2c211d] text-center truncate border border-white/60 shadow-sm">
                Garnish: {product.toppings[0]}
              </div>
            )}
          </div>

          {/* Card Meta & Bottom Row */}
          <div className="mt-5 space-y-2">
            <div className="flex justify-between items-baseline gap-2">
              <h3 className="text-xl font-bold text-[#2c211d] group-hover:text-pink-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-xl font-black text-[#2c211d] shrink-0">₹{product.price}</p>
            </div>

            <p className="text-xs text-[#2c211d]/70 font-normal line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            {/* Tasting Notes Tags */}
            {product.notes && (
              <div className="flex flex-wrap gap-1.5 pt-2">
                {product.notes.slice(0, 2).map((note, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-medium bg-[#2c211d]/5 text-[#2c211d]/80 px-2.5 py-0.5 rounded-full"
                  >
                    {note}
                  </span>
                ))}
              </div>
            )}

            {/* Quick Action Button */}
            <div className="pt-3">
              <motion.button
                onClick={handleQuickAdd}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                  added
                    ? "bg-emerald-600 text-white"
                    : "bg-[#2c211d] text-white hover:bg-[#4a3832]"
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" /> Added to Scoop
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" /> Quick Add
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}