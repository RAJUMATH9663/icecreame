"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Flavors", icon: "✨" },
  { id: "fruit", label: "Farm Fruit", icon: "🍓" },
  { id: "chocolate", label: "Chocolate & Fudge", icon: "🍫" },
  { id: "premium", label: "Chef's Reserve", icon: "🥜" },
  { id: "seasonal", label: "Summer Special", icon: "🥭" },
];

export function FeaturedFlavors() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="relative -mt-12 md:-mt-20 z-35 pt-20 pb-28 bg-gradient-to-b from-[#ffffff] via-[#fffbf6] to-[#fcf4f5] rounded-t-[3.5rem] md:rounded-t-[6rem] shadow-[0_-30px_70px_rgba(44,33,29,0.08)] border-t-2 border-white">
      {/* Overlapping Floating Connector Badge */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-40">
        <motion.div
          whileHover={{ scale: 1.1, y: -3 }}
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-amber-500 text-white text-xs font-black tracking-widest uppercase shadow-2xl border-2 border-white flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span>Section 02 • Curated Menu</span>
        </motion.div>
      </div>

      <div className="container">
        {/* Decorative Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-extrabold text-pink-600 bg-pink-100/80 px-3.5 py-1.5 rounded-full mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" /> Curated Scoops
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="display text-5xl md:text-7xl font-black text-[#2c211d]"
            >
              Meet Your Next Obsession.
            </motion.h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-full glass-panel border border-white/80">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 z-10 ${
                  activeCategory === cat.id ? "text-white" : "text-[#2c211d] hover:text-pink-600"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-[#2c211d] rounded-full -z-10 shadow-md"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Animated Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/flavors"
            className="inline-flex items-center gap-3 bg-white hover:bg-[#2c211d] text-[#2c211d] hover:text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest border border-black/10 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <span>View All 24 Seasonal Creations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}