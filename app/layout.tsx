import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "FROSTÉ — Artisan Ice Cream",
  description: "Handcrafted ice cream made with real ingredients, bold flavors, and a little bit of magic.",
  openGraph: { title: "FROSTÉ — Artisan Ice Cream", description: "Scoop Happiness." }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar />{children}<Footer /></body></html>;
}
