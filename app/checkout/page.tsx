"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, ArrowLeft, CreditCard, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  const [completed, setCompleted] = useState(false);
  const [formData, setFormData] = useState({
    name: "Aarav Sharma",
    phone: "+91 98765 43210",
    address: "Penthouse 4B, Horizon Greens, Bandra West",
    city: "Mumbai",
    pincode: "400050",
    paymentMethod: "upi",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCompleted(true);
  };

  return (
    <main className="container py-16">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/cart"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2c211d]/70 hover:text-pink-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Cart
        </Link>

        {completed ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-16 glass-panel rounded-[3rem] p-10 border border-white shadow-2xl space-y-6"
          >
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full grid place-items-center mx-auto text-4xl shadow-inner">
              🍨
            </div>
            <h1 className="display text-4xl md:text-5xl font-black text-[#2c211d]">
              Order Churning in Progress!
            </h1>
            <p className="text-base text-[#2c211d]/80 max-w-md mx-auto">
              Your artisanal batch is being fresh scooped and packed in insulated dry ice. Delivery estimated within <b>35 minutes</b>.
            </p>
            <div className="p-4 bg-white rounded-2xl max-w-sm mx-auto border border-black/5 text-xs text-[#2c211d]">
              <b>Order #FR-88429</b> • Confirmation sent to {formData.phone}
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#2c211d] text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest"
            >
              Back to Home <Sparkles className="w-4 h-4 text-amber-300" />
            </Link>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="pb-4 border-b border-black/10">
              <h1 className="display text-4xl font-black text-[#2c211d]">Express Checkout</h1>
              <p className="text-sm text-[#2c211d]/70 mt-1 font-medium">
                Fresh-churned artisan delivery straight to your doorstep.
              </p>
            </div>

            {/* Address Form */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white space-y-4 shadow-md">
              <h2 className="text-sm font-black uppercase tracking-wider text-[#2c211d]">
                1. Delivery Destination
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#2c211d]">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full mt-1 bg-white border border-black/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#2c211d]">Phone Number</label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full mt-1 bg-white border border-black/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#2c211d]">Street Address & Landmark</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full mt-1 bg-white border border-black/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#2c211d]">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full mt-1 bg-white border border-black/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#2c211d]">Pincode</label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full mt-1 bg-white border border-black/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white space-y-4 shadow-md">
              <h2 className="text-sm font-black uppercase tracking-wider text-[#2c211d]">
                2. Select Payment Method
              </h2>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "upi", label: "Instant UPI", icon: "⚡" },
                  { id: "card", label: "Credit / Debit", icon: "💳" },
                  { id: "cod", label: "Cash on Delivery", icon: "💵" },
                ].map((m) => (
                  <button
                    type="button"
                    key={m.id}
                    onClick={() => setFormData({ ...formData, paymentMethod: m.id })}
                    className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center gap-1 ${
                      formData.paymentMethod === m.id
                        ? "bg-[#2c211d] text-white border-[#2c211d] shadow-md scale-[1.02]"
                        : "bg-white/80 text-[#2c211d] border-black/10 hover:bg-white"
                    }`}
                  >
                    <span className="text-2xl">{m.icon}</span>
                    <span className="text-xs font-bold">{m.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#2c211d] text-[#fffaf2] py-4 rounded-full font-bold text-xs uppercase tracking-widest shadow-2xl hover:bg-[#4a3832] transition-colors flex items-center justify-center gap-2"
            >
              <span>Place Order • ₹580</span>
              <Check className="w-4 h-4 text-pink-400" />
            </motion.button>
          </form>
        )}
      </div>
    </main>
  );
}