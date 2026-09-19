import { MapPin, Clock, Phone, Sparkles, Navigation } from "lucide-react";
import Link from "next/link";

const SHOPS = [
  {
    name: "FROSTÉ Flagship Bandra",
    address: "Pali Hill, Next to Candies, Bandra West, Mumbai 400050",
    phone: "+91 98200 12345",
    hours: "11:00 AM – 1:00 AM Daily",
    status: "Open Now",
    emoji: "🍧",
    tag: "Flagship Parlour",
  },
  {
    name: "FROSTÉ Indiranagar",
    address: "12th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru 560038",
    phone: "+91 98450 67890",
    hours: "11:00 AM – 12:30 AM Daily",
    status: "Open Now",
    emoji: "🍨",
    tag: "Garden Tasting Room",
  },
  {
    name: "FROSTÉ Khan Market",
    address: "Middle Lane, Khan Market, New Delhi 110003",
    phone: "+91 98110 54321",
    hours: "11:30 AM – 11:30 PM Daily",
    status: "Open Now",
    emoji: "🍦",
    tag: "Boutique Kiosk",
  },
];

export default function LocationsPage() {
  return (
    <main className="container py-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Boutique Parlours
        </span>
        <h1 className="display text-5xl md:text-7xl font-black text-[#2c211d]">
          Visit Our Scoop Shops.
        </h1>
        <p className="mt-4 text-base text-[#2c211d]/75 font-normal">
          Step into our pastel gelato parlours to sample fresh-churned flavors straight from the batch freezer.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SHOPS.map((shop, i) => (
          <div
            key={i}
            className="p-8 rounded-[2.5rem] bg-white/90 backdrop-blur-md border border-white shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-5xl">{shop.emoji}</span>
                <span className="bg-emerald-100 text-emerald-800 text-[11px] font-black px-3 py-1 rounded-full">
                  {shop.status}
                </span>
              </div>

              <span className="text-[10px] uppercase font-black tracking-widest text-pink-600">
                {shop.tag}
              </span>
              <h3 className="display text-2xl font-bold text-[#2c211d] mt-1 mb-4">
                {shop.name}
              </h3>

              <div className="space-y-3 text-xs text-[#2c211d]/80">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                  <span>{shop.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{shop.hours}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>{shop.phone}</span>
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5">
              <button className="w-full bg-[#2c211d] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#4a3832] transition-colors">
                <Navigation className="w-3.5 h-3.5" /> Get Directions
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}