"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, Gift } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="relative -mt-12 md:-mt-20 z-55 pt-24 pb-24 bg-gradient-to-b from-[#2c211d] via-[#241a17] to-[#1d1512] text-[#fffaf2] rounded-t-[3.5rem] md:rounded-t-[6rem] shadow-[0_-40px_90px_rgba(0,0,0,0.35)] border-t-2 border-white/20">
      {/* Overlapping Floating Connector Badge */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          whileHover={{ scale: 1.1, y: -3 }}
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-amber-400 text-[#2c211d] text-xs font-black tracking-widest uppercase shadow-2xl border-2 border-white flex items-center gap-2"
        >
          <Gift className="w-4 h-4" />
          <span>Section 06 • VIP Scoop Club</span>
        </motion.div>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-[3.5rem] bg-white/5 backdrop-blur-md p-10 md:p-16 text-center relative overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Background glow & sparkles */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-extrabold text-amber-300 bg-amber-400/20 border border-amber-300/30 px-4 py-1.5 rounded-full">
              <Gift className="w-3.5 h-3.5" /> VIP Scoop Club
            </div>

            <h2 className="display text-4xl md:text-6xl font-black text-[#fffaf2]">
              A Little Sweetness in Your Inbox.
            </h2>

            <p className="max-w-xl mx-auto text-base text-[#fffaf2]/80 leading-relaxed">
              Join 45,000+ gelato connoisseurs. Get secret drop alerts, secret tasting invitations, and a free double scoop on your birthday! 🎂
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 bg-white/10 border border-white/25 rounded-full px-6 py-4 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-amber-400 text-[#2c211d] font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-widest shadow-lg hover:shadow-pink-500/30 transition-all shrink-0"
              >
                {subscribed ? (
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Welcome!
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" /> Get 15% Off
                  </span>
                )}
              </motion.button>
            </form>

            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-pink-300 font-bold"
              >
                🎉 Welcome to the Club! Check your inbox for your 15% voucher code.
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}