"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Sparkles, Search } from "lucide-react";
import { motion } from "framer-motion";

const CATEGORIES = [
  { id: "all", label: "All Scoops" },
  { id: "fruit", label: "Farm Fresh Fruit" },
  { id: "chocolate", label: "Belgian Chocolate" },
  { id: "premium", label: "Chef's Reserve" },
  { id: "seasonal", label: "Summer Special" },
  { id: "classic", label: "Time-tested Classics" },
];

export default function FlavorsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="container py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-800 text-xs font-black uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Full Flavor Archive
        </div>
        <h1 className="display text-5xl md:text-7xl font-black text-[#2c211d]">
          The Complete Scoop Vault.
        </h1>
        <p className="mt-4 text-base md:text-lg text-[#2c211d]/75 font-normal">
          Every flavor is handcrafted in small batches of 20 liters using unpasteurized cold-infusion techniques for maximum aroma.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-md mx-auto relative">
          <Search className="w-4 h-4 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search flavor or ingredient (e.g. Mango, Pistachio)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/90 border border-black/10 rounded-full pl-12 pr-6 py-3.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              selectedCategory === cat.id
                ? "bg-[#2c211d] text-white shadow-md scale-105"
                : "bg-white/80 text-[#2c211d] border border-black/10 hover:bg-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-5xl mb-4">🍨</p>
          <h3 className="text-xl font-bold text-[#2c211d]">No scoops found</h3>
          <p className="text-sm text-[#2c211d]/60 mt-1">Try another search term or filter!</p>
        </div>
      )}
    </main>
  );
}
