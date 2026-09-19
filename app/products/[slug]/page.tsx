"use client";

import { use, useState } from "react";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Sparkles, Star, ShieldCheck, Heart, ArrowLeft, Plus, Check } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { motion } from "framer-motion";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);
  const [selectedSizeIdx, setSelectedSizeIdx] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) notFound();

  const related = products.filter((p) => p.slug !== slug).slice(0, 3);
  const bgGradient =
    product.bgPastel || "from-[#ffe4e6] via-[#fecdd3] to-[#fb7185]/20";

  const sizes = [
    { name: "Single Scoop", price: product.price, icon: "🍦" },
    { name: "Double Waffle", price: Math.round(product.price * 1.8), icon: "🍨" },
    { name: "500ml Takeaway Pint", price: Math.round(product.price * 2.8), icon: "🥡" },
  ];

  const currentPrice = sizes[selectedSizeIdx].price;

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <main className="container py-12 md:py-20 relative">
      {/* Breadcrumb / Back Link */}
      <div className="mb-8">
        <Link
          href="/flavors"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2c211d]/70 hover:text-pink-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Flavors
        </Link>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
        {/* Left: 3D Product Stage */}
        <div className="lg:col-span-6 flex justify-center perspective-1000">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`relative w-full max-w-lg aspect-square rounded-[3.5rem] bg-gradient-to-br ${bgGradient} p-10 flex flex-col justify-between items-center shadow-2xl border-4 border-white overflow-hidden`}
          >
            <div className="w-full flex justify-between items-center z-10">
              <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-black text-[#2c211d] shadow-sm">
                {product.tag || "Handcrafted Batch"}
              </span>
              <div className="flex items-center gap-1 bg-white/90 px-3 py-1.5 rounded-full text-xs font-bold text-amber-500 shadow-sm">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="text-[#2c211d]">
                  {product.rating} ({product.reviewsCount || 120} reviews)
                </span>
              </div>
            </div>

            {/* Giant Emoji with Floating Shadow */}
            <div className="relative my-auto flex flex-col items-center justify-center">
              <motion.div
                animate={{
                  y: [0, -16, 0],
                  rotate: [0, 4, -4, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-[10rem] md:text-[12rem] leading-none filter drop-shadow-2xl select-none"
              >
                {product.emoji}
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-44 h-8 bg-black/20 rounded-full blur-md -mt-4"
              />
            </div>

            <div className="w-full glass-panel-dark text-white p-4 rounded-2xl flex items-center justify-between border border-white/20">
              <span className="text-xs text-pink-300 font-bold uppercase">
                100% Artisan Churned
              </span>
              <span className="text-xs font-semibold">
                {product.calories || 220} kcal / scoop
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right: Product Details & Purchase Controls */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Signature Scoop
            </div>
            <h1 className="display text-5xl md:text-6xl font-black text-[#2c211d]">
              {product.name}
            </h1>
            <p className="text-2xl md:text-3xl font-black text-[#2c211d] mt-3">
              ₹{currentPrice}{" "}
              <span className="text-sm font-normal text-[#2c211d]/60">
                ({sizes[selectedSizeIdx].name})
              </span>
            </p>
          </div>

          <p className="text-base md:text-lg text-[#2c211d]/80 leading-relaxed">
            {product.description}
          </p>

          {/* Flavor Notes */}
          {product.notes && (
            <div className="p-5 rounded-3xl glass-panel border border-white/80 space-y-2">
              <h3 className="text-xs uppercase font-black tracking-wider text-[#2c211d]">
                Key Tasting Notes & Origin
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.notes.map((note, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white rounded-full text-xs font-bold text-[#2c211d] border border-black/5 shadow-sm"
                  >
                    ✦ {note}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Serving Size Selector */}
          <div className="space-y-2">
            <label className="text-xs uppercase font-bold tracking-wider text-[#2c211d]">
              Select Serving Size:
            </label>
            <div className="grid grid-cols-3 gap-3">
              {sizes.map((size, idx) => (
                <button
                  key={size.name}
                  onClick={() => setSelectedSizeIdx(idx)}
                  className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1 ${
                    idx === selectedSizeIdx
                      ? "bg-[#2c211d] text-white border-[#2c211d] shadow-md scale-[1.02]"
                      : "bg-white/80 text-[#2c211d] border-black/10 hover:bg-white"
                  }`}
                >
                  <span className="text-2xl">{size.icon}</span>
                  <span className="text-xs font-bold">{size.name}</span>
                  <span className="text-[11px] opacity-80">₹{size.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={handleAddToCart}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex-1 py-4 rounded-full font-bold text-sm tracking-widest uppercase text-center shadow-xl transition-all flex items-center justify-center gap-2 ${
                added
                  ? "bg-emerald-600 text-white"
                  : "bg-[#2c211d] text-[#fffaf2] hover:bg-[#4a3832]"
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" /> Added to Scoop Cart!
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" /> Add to Scoop Cart (₹{currentPrice})
                </>
              )}
            </motion.button>
            <Link
              href="/checkout"
              className="px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase text-center glass-panel border border-black/10 hover:bg-white text-[#2c211d] transition-colors"
            >
              Quick Checkout
            </Link>
          </div>

          {/* Guarantee Badges */}
          <div className="pt-4 grid grid-cols-2 gap-3 text-xs text-[#2c211d]/75 font-medium border-t border-black/5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Insulated Dry-Ice Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pink-600" />
              <span>100% Churn Fresh Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Flavors Section */}
      <div className="pt-12 border-t border-black/10">
        <h2 className="display text-4xl font-black text-[#2c211d] mb-8">
          You Might Also Crave.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
