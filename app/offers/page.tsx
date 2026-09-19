"use client";

import { Sparkles, Tag, Copy, Check } from "lucide-react";
import { useState } from "react";

const OFFERS = [
  {
    code: "FROST15",
    discount: "15% OFF",
    title: "First Scoop Welcome Treat",
    desc: "Valid on any order above ₹350 for new members.",
    badge: "Most Popular",
    color: "#ffe4e6",
  },
  {
    code: "DOUBLEUP",
    discount: "FREE UPGRADE",
    title: "Double Scoop for Single Price",
    desc: "Order on Tuesdays to get double scoops upgraded free.",
    badge: "Tuesdays Only",
    color: "#fef3c7",
  },
  {
    code: "PARTYPACK",
    discount: "FLAT ₹150 OFF",
    title: "Boutique 4-Pint Party Pack",
    desc: "Pick any 4 artisanal 500ml tubs and save instantly.",
    badge: "Weekend Special",
    color: "#ecfccb",
  },
];

export default function OffersPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <main className="container py-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-100 text-pink-800 text-xs font-black uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Seasonal Savings
        </span>
        <h1 className="display text-5xl md:text-7xl font-black text-[#2c211d]">
          The Sweet Perks Vault.
        </h1>
        <p className="mt-4 text-base text-[#2c211d]/75 font-normal">
          Exclusive discounts and vouchers for our community of gelato aficionados.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {OFFERS.map((offer, i) => (
          <div
            key={i}
            className="p-8 rounded-[2.5rem] bg-white/90 backdrop-blur-md border border-white shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs uppercase font-black tracking-wider text-pink-600">
                  {offer.badge}
                </span>
                <Tag className="w-4 h-4 text-gray-400" />
              </div>

              <div
                className="py-4 px-6 rounded-2xl text-center mb-6 shadow-inner"
                style={{ backgroundColor: offer.color }}
              >
                <span className="display text-3xl font-black text-[#2c211d]">
                  {offer.discount}
                </span>
              </div>

              <h3 className="display text-2xl font-bold text-[#2c211d] mb-2">
                {offer.title}
              </h3>
              <p className="text-xs text-[#2c211d]/75 leading-relaxed">{offer.desc}</p>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5">
              <button
                onClick={() => copyToClipboard(offer.code)}
                className="w-full bg-[#2c211d] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#4a3832] transition-colors"
              >
                {copiedCode === offer.code ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copied '{offer.code}'!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Code: {offer.code}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}