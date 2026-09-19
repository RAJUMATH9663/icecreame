"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative -mt-12 z-60 bg-[#1d1512] text-[#fffaf2] overflow-hidden rounded-t-[3rem] md:rounded-t-[4.5rem] border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      {/* Decorative Wave Divider */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

      <div className="container pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Mascot */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-3xl">🍨</span>
              <span className="display text-4xl font-black text-white">FROSTÉ</span>
            </Link>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              Handcrafted artisan gelato and ice cream made with 100% farm-fresh dairy, slow-churned in micro batches.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                { label: "IG", emoji: "📸", href: "#" },
                { label: "FB", emoji: "📘", href: "#" },
                { label: "YT", emoji: "🎬", href: "#" },
                { label: "X", emoji: "🐦", href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/10 grid place-items-center text-sm shadow-sm hover:bg-white/20 transition-colors"
                >
                  <span>{social.emoji}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Col 2: Flavors */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-black text-pink-400">
              Flavors & Scoops
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <Link href="/flavors" className="hover:text-pink-300 transition-colors">
                  Strawberry Cloud
                </Link>
              </li>
              <li>
                <Link href="/flavors" className="hover:text-pink-300 transition-colors">
                  Sicilian Pistachio Dream
                </Link>
              </li>
              <li>
                <Link href="/flavors" className="hover:text-pink-300 transition-colors">
                  Alphonso Mango Sunshine
                </Link>
              </li>
              <li>
                <Link href="/flavors" className="hover:text-pink-300 transition-colors">
                  Belgian Noir 70%
                </Link>
              </li>
              <li>
                <Link href="/flavors" className="hover:text-pink-300 transition-colors">
                  Smoked Salted Caramel
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-black text-pink-400">Company</h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <Link href="/our-story" className="hover:text-pink-300 transition-colors">
                  Our Philosophy & Story
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-pink-300 transition-colors">
                  Scoop Shop Locations
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:text-pink-300 transition-colors">
                  Seasonal Vault Offers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-300 transition-colors">
                  Catering & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Boutique Hours */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-black text-pink-400">
              Scoop Hours
            </h4>
            <p className="text-xs text-white/75 leading-relaxed">
              <b className="text-white">Mon – Thu:</b> 11:00 AM – 11:30 PM
              <br />
              <b className="text-white">Fri – Sun:</b> 11:00 AM – 1:00 AM
            </p>
            <div className="p-3 rounded-2xl bg-white/10 border border-white/10 text-[11px] text-pink-200">
              ✨ Midnight delivery open across all flagship locations.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 FROSTÉ Artisan Ice Cream Ltd. Handcrafted with love.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Nutrition & Allergens</span>
          </div>
        </div>
      </div>
    </footer>
  );
}