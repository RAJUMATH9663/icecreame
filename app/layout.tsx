import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  title: "FROSTÉ — Artisan Gelato & Ice Cream",
  description: "Handcrafted artisan gelato made with 100% farm-fresh dairy, slow-churned in micro batches with bold flavors.",
  openGraph: { title: "FROSTÉ — Artisan Ice Cream", description: "Scoop Happiness." }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
