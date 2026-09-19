import { Sparkles, Heart, ShieldCheck, Award } from "lucide-react";
import Link from "next/link";

export default function OurStoryPage() {
  return (
    <main className="container py-16 space-y-20">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" /> Born in a Small Kitchen
        </span>
        <h1 className="display text-5xl md:text-7xl font-black text-[#2c211d]">
          The Obsession Behind Every Scoop.
        </h1>
        <p className="text-base md:text-lg text-[#2c211d]/80 leading-relaxed font-medium">
          In 2026, FROSTÉ was founded on a simple rebel philosophy: real ice cream shouldn't need chemical emulsifiers, artificial gums, or pre-made syrups.
        </p>
      </div>

      {/* 3 Columns of Pillars */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: "🥛",
            title: "Pasture to Pint",
            desc: "We partner exclusively with regenerative dairy farms where grass-fed Jersey cows produce 38% butterfat milk with unmatched creaminess.",
          },
          {
            icon: "🍒",
            title: "Peak Harvest Only",
            desc: "If strawberries aren't in peak sunrise harvest in Mahabaleshwar, we don't churn strawberry. We let nature dictate our menu.",
          },
          {
            icon: "❄️",
            title: "Zero Air Overrun",
            desc: "Commercial brands pump 50-100% air into their tubs. We slow-churn with minimal overrun for dense, velvety gelato luxury.",
          },
        ].map((pillar, i) => (
          <div
            key={i}
            className="p-8 rounded-[2.5rem] bg-white/90 backdrop-blur-md border border-white shadow-xl flex flex-col justify-between"
          >
            <div className="text-6xl mb-6">{pillar.icon}</div>
            <div>
              <h3 className="display text-2xl font-bold text-[#2c211d] mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#2c211d]/75 leading-relaxed">{pillar.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="rounded-[3rem] bg-[#2c211d] text-[#fffaf2] p-12 text-center space-y-6 shadow-2xl">
        <h2 className="display text-4xl md:text-5xl font-black">
          Taste the Handcrafted Difference.
        </h2>
        <p className="max-w-md mx-auto text-sm opacity-80">
          Visit any of our boutique scoop shops or order fresh delivery packed in insulated dry ice.
        </p>
        <Link
          href="/flavors"
          className="inline-flex items-center gap-2 bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-pink-600 transition-colors"
        >
          Explore All Flavors
        </Link>
      </div>
    </main>
  );
}