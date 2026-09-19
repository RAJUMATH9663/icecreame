"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

type CartItem = {
  id: string;
  name: string;
  emoji: string;
  price: number;
  quantity: number;
  serving: string;
  color: string;
};

const INITIAL_CART: CartItem[] = [
  {
    id: "1",
    name: "Strawberry Cloud",
    emoji: "🍓",
    price: 180,
    quantity: 2,
    serving: "Single Scoop Cup",
    color: "#ffe4e6",
  },
  {
    id: "3",
    name: "Sicilian Pistachio Dream",
    emoji: "🥜",
    price: 220,
    quantity: 1,
    serving: "Crispy Waffle Cone",
    color: "#ecfccb",
  },
];

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(INITIAL_CART);
  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = discountApplied ? Math.round(subtotal * 0.15) : 0;
  const delivery = subtotal > 400 ? 0 : 49;
  const total = subtotal - discount + delivery;

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toLowerCase() === "frost15" || promoCode.trim().length > 0) {
      setDiscountApplied(true);
    }
  };

  return (
    <main className="container py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10">
          <div>
            <h1 className="display text-4xl md:text-5xl font-black text-[#2c211d]">
              Your Scoop Cart
            </h1>
            <p className="text-sm text-[#2c211d]/70 mt-1 font-medium">
              Review your artisan picks before fresh churn preparation.
            </p>
          </div>
          <span className="bg-pink-100 text-pink-800 text-xs font-black px-4 py-1.5 rounded-full">
            {items.reduce((sum, i) => sum + i.quantity, 0)} Items
          </span>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-24 glass-panel rounded-3xl p-10 border border-white">
            <p className="text-6xl mb-4">🍨</p>
            <h2 className="display text-3xl font-bold text-[#2c211d]">Your cart is empty</h2>
            <p className="text-sm text-[#2c211d]/70 mt-2 max-w-sm mx-auto">
              Your sweet tooth deserves something special! Check out our artisanal seasonal flavors.
            </p>
            <Link
              href="/flavors"
              className="inline-flex items-center gap-2 mt-6 bg-[#2c211d] text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest"
            >
              Explore Flavors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Cart Items List */}
            <div className="lg:col-span-7 space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  className="p-4 sm:p-5 rounded-3xl bg-white/90 backdrop-blur-md border border-white shadow-md flex items-center gap-4"
                >
                  <div
                    className="w-20 h-20 rounded-2xl grid place-items-center text-4xl shadow-inner shrink-0"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.emoji}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base text-[#2c211d] leading-tight truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#2c211d]/60 mt-0.5">{item.serving}</p>
                    <p className="text-sm font-black text-[#2c211d] mt-1">₹{item.price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 bg-black/5 p-1 rounded-full">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-7 h-7 rounded-full bg-white text-[#2c211d] grid place-items-center shadow-xs hover:bg-rose-50 hover:text-rose-600"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-5 text-center text-xs font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-7 h-7 rounded-full bg-white text-[#2c211d] grid place-items-center shadow-xs hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}

              {/* Promo code input */}
              <form
                onSubmit={applyPromo}
                className="p-4 rounded-3xl glass-panel border border-white flex gap-2"
              >
                <div className="relative flex-1">
                  <Tag className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter Coupon (Try 'FROST15')"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full bg-white rounded-full pl-10 pr-4 py-2.5 text-xs font-bold border border-black/10 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#2c211d] text-white px-5 rounded-full text-xs font-bold uppercase tracking-wider"
                >
                  Apply
                </button>
              </form>
            </div>

            {/* Order Summary Column */}
            <div className="lg:col-span-5 glass-panel rounded-3xl p-6 border border-white shadow-xl space-y-4">
              <h2 className="text-base font-black uppercase tracking-wider text-[#2c211d] pb-2 border-b border-black/10">
                Order Summary
              </h2>

              <div className="space-y-2.5 text-sm text-[#2c211d]">
                <div className="flex justify-between">
                  <span className="opacity-75">Subtotal</span>
                  <span className="font-bold">₹{subtotal}</span>
                </div>

                {discountApplied && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>VIP Discount (15%)</span>
                    <span>-₹{discount}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="opacity-75">Insulated Dry-Ice Delivery</span>
                  <span className="font-bold">
                    {delivery === 0 ? (
                      <span className="text-emerald-700 font-bold">FREE</span>
                    ) : (
                      `₹${delivery}`
                    )}
                  </span>
                </div>

                <div className="pt-3 border-t border-black/10 flex justify-between items-baseline">
                  <span className="text-base font-black">Estimated Total</span>
                  <span className="display text-2xl font-black text-[#2c211d]">₹{total}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full bg-[#2c211d] text-[#fffaf2] py-4 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl hover:bg-[#4a3832] transition-colors mt-4"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="pt-3 text-[11px] text-[#2c211d]/70 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Melt Guarantee — Delivered below -18°C</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}