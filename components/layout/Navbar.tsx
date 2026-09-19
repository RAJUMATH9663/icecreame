"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ShoppingBag, Menu, X, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/flavors", label: "Flavors" },
  { href: "/our-story", label: "Our Story" },
  { href: "/locations", label: "Scoop Shops" },
  { href: "/offers", label: "Offers" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-8 pointer-events-none">
      <div className="max-w-6xl mx-auto glass-panel rounded-full px-6 py-3.5 flex items-center justify-between shadow-xl border border-white/80 pointer-events-auto transition-all">
        {/* Brand Logo with 3D Pop */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.span
            className="text-2xl"
            whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            🍨
          </motion.span>
          <span className="display text-2xl md:text-3xl font-black tracking-tight text-[#2c211d] group-hover:text-pink-600 transition-colors">
            FROSTÉ
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-black/5 p-1 rounded-full border border-black/5">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  isActive ? "text-[#2c211d]" : "text-[#2c211d]/75 hover:text-[#2c211d]"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-white rounded-full shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Cart + Mobile Menu */}
        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="group relative inline-flex items-center gap-2 bg-[#2c211d] text-[#fffaf2] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#4a3832] transition-all active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-pink-400 group-hover:scale-110 transition-transform" />
            <span>Cart</span>
            <span className="w-4 h-4 rounded-full bg-pink-500 text-white text-[10px] grid place-items-center font-black">
              2
            </span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full bg-white/80 text-[#2c211d] shadow-sm"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden mt-3 max-w-sm mx-auto glass-panel-dark text-white rounded-3xl p-6 shadow-2xl border border-white/20 pointer-events-auto space-y-4"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-white/10 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <Sparkles className="w-3.5 h-3.5 text-pink-400 opacity-60" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}