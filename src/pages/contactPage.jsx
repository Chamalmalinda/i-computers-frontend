// src/pages/contactPage.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";

const SLOGANS = [
  "Talk to a real human — no bots, no scripts.",
  "Same-day replies. Same-day solutions.",
  "Your problem is our priority.",
];

export default function ContactPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLOGANS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/contact.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/95" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 mb-4">
            Get in Touch • Isuri Technologies
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            We're Here
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              When You Need Us
            </span>
          </h1>

          {/* Animated Slogan */}
          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="mt-10 min-h-[3rem] text-base sm:text-lg md:text-xl font-medium text-cyan-100"
          >
            {SLOGANS[activeIndex]}
          </motion.p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-base sm:text-lg font-bold text-slate-900 shadow-lg shadow-cyan-500/40 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/60 hover:scale-105"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              WhatsApp Us
            </a>
            <a
              href="tel:+94771234567"
              className="inline-flex items-center justify-center rounded-full border border-slate-500/70 bg-white/5 px-8 py-4 text-base sm:text-lg font-semibold text-slate-100 backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-white/10 hover:scale-105"
            >
              <Phone className="mr-3 h-5 w-5" />
              Call Now
            </a>
          </div>
        </motion.div>
      </section>

      {/* Contact Methods - Glassmorphic Cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-cyan-500/50 bg-cyan-500/10 p-10 text-center backdrop-blur-md shadow-lg shadow-cyan-500/20 transition-all"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-green-400 to-cyan-500 shadow-xl">
              <MessageCircle className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-xl font-bold text-cyan-300 mb-3">WhatsApp / Chat</h3>
            <p className="text-base text-gray-300 mb-6">Fastest response — usually under 2 minutes</p>
            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-semibold hover:underline"
            >
              +94 77 123 4567
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-md transition-all"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-indigo-600 shadow-xl">
              <Phone className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Call Us</h3>
            <p className="text-base text-gray-300 mb-6">
              Mon–Sat: 9 AM – 7 PM<br />Sunday: 10 AM – 5 PM
            </p>
            <a href="tel:+94771234567" className="text-cyan-400 font-semibold hover:underline">
              +94 77 123 4567
            </a>
          </motion.div>

          {/* Visit Store */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-md transition-all"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-pink-600 shadow-xl">
              <MapPin className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Visit Our Store</h3>
            <p className="text-base text-gray-300 mb-4">Colombo 06</p>
            <p className="text-sm text-gray-400">
              No. 45, Galle Road,<br />
              Colombo 06, Sri Lanka
            </p>
            <a
              href="https://maps.google.com/?q=Isuri+Computers+Colombo+06"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-cyan-400 font-semibold hover:underline"
            >
              Open in Google Maps →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 md:p-16 backdrop-blur-lg"
        >
          <h2 className="text-center text-3xl sm:text-4xl font-black mb-4">
            Send Us a Message
          </h2>
          <p className="text-center text-base sm:text-lg text-cyan-100 mb-12">
            We reply to every message — usually within the hour
          </p>

          <form className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-white placeholder-gray-400 backdrop-blur-md focus:border-cyan-400 focus:outline-none transition"
            />
            <input
              type="tel"
              placeholder="Phone / WhatsApp"
              required
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-white placeholder-gray-400 backdrop-blur-md focus:border-cyan-400 focus:outline-none transition"
            />
            <input
              type="email"
              placeholder="Email (optional)"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-white placeholder-gray-400 backdrop-blur-md focus:border-cyan-400 focus:outline-none transition md:col-span-2"
            />
            <textarea
              rows="6"
              placeholder="How can we help you today?"
              required
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-white placeholder-gray-400 backdrop-blur-md focus:border-cyan-400 focus:outline-none transition resize-none md:col-span-2"
            />

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-10 py-4 text-lg font-bold text-slate-900 shadow-xl shadow-cyan-500/40 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/60 hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 via-indigo-900/30 to-violet-900/30" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8">
            We're Just One Message Away
          </h2>
          <p className="text-lg md:text-xl text-cyan-100 mb-12 max-w-3xl mx-auto">
            Have a question? Need advice on a build? Reach out — we're always ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-10 py-4 text-lg font-bold text-slate-900 shadow-2xl shadow-cyan-500/50 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/70 hover:scale-110"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              START WHATSAPP CHAT
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}