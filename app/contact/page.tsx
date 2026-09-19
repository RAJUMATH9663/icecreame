"use client";

import { Sparkles, Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="container py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-100 text-pink-800 text-xs font-black uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Get in Touch
          </span>
          <h1 className="display text-5xl md:text-7xl font-black text-[#2c211d]">
            Let's Talk Scoops.
          </h1>
          <p className="mt-4 text-base text-[#2c211d]/75 font-normal">
            For catering bookings, wedding gelato bars, press inquiries, or bespoke flavors, drop us a line!
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Info Card */}
          <div className="md:col-span-5 rounded-[2.5rem] bg-[#2c211d] text-[#fffaf2] p-8 space-y-6 shadow-xl">
            <h3 className="display text-2xl font-bold">Direct Contact</h3>
            <p className="text-xs opacity-75 leading-relaxed">
              Our concierge team is available Mon-Sun to assist with event bookings and flavor tastings.
            </p>

            <div className="space-y-4 text-xs">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-pink-400" />
                <span>hello@frosteicecream.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91 (022) 4099-7700</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Bandra West Flagship, Mumbai</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 text-[11px] leading-relaxed text-pink-200">
              🍦 <b>Event Catering:</b> Mobile live-churn gelato carts available for weddings & private galas.
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7 glass-panel p-8 rounded-[2.5rem] border border-white shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full grid place-items-center mx-auto text-3xl">
                  💌
                </div>
                <h3 className="display text-2xl font-bold text-[#2c211d]">
                  Message Received!
                </h3>
                <p className="text-xs text-[#2c211d]/70 max-w-xs mx-auto">
                  Our concierge will get back to you within 2-4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#2c211d]">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full mt-1 bg-white border border-black/10 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#2c211d]">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full mt-1 bg-white border border-black/10 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#2c211d]">Inquiry Type</label>
                  <select className="w-full mt-1 bg-white border border-black/10 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-pink-400">
                    <option>Wedding Gelato Bar / Private Catering</option>
                    <option>Retail / Wholesale Partnership</option>
                    <option>Press & Collaborations</option>
                    <option>Customer Feedback & Custom Flavor Request</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#2c211d]">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your event, date, or message..."
                    className="w-full mt-1 bg-white border border-black/10 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2c211d] text-white py-4 rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#4a3832] transition-colors shadow-lg"
                >
                  <Send className="w-3.5 h-3.5" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}