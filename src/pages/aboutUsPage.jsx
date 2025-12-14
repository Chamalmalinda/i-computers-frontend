// src/pages/aboutUsPage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SLOGANS = [
  "We don’t just sell computers — we build trust.",
  "Genuine parts. Transparent pricing. Real humans.",
  "From first-time buyers to pro builders — everyone feels at home.",
];

export default function AboutUsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLOGANS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section - Same exact style as Home */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/about.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/95" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 mb-4">
            Isuri Technologies • Since 2015
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
            Built on{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Trust
            </span>
            .<br />
            Powered by{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Passion
            </span>
            .
          </h1>

          {/* Animated Slogan - Same as Home */}
          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="mt-10 min-h-[3rem] text-lg sm:text-xl md:text-2xl font-medium text-cyan-100"
          >
            {SLOGANS[activeIndex]}
          </motion.p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-lg font-bold text-slate-900 shadow-lg shadow-cyan-500/40 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/60 hover:scale-105"
            >
              Explore Custom Builds
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-500/70 bg-white/5 px-8 py-4 text-lg font-semibold text-slate-100 backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-white/10 hover:scale-105"
            >
              Talk to Our Team
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Our Story - Glassmorphic Cards (Same style as Home) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Our Journey
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-black leading-tight">
              From a small Colombo workshop
              <br />
              to Sri Lanka’s most trusted PC builder.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-gray-300">
              We started in 2015 with one simple belief: <strong>everyone deserves great tech without the drama</strong>.
              No pushy sales. No fake discounts. Just honest advice, genuine parts, and builds that actually last.
            </p>
            <p className="mt-6 text-lg text-gray-300">
              Today, thousands of students, gamers, creators, and businesses trust us to power their digital lives — because we treat every build like it’s our own.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <div className="text-5xl font-black text-cyan-400">12K+</div>
              <p className="mt-2 text-lg font-semibold">Happy Customers Island-wide</p>
            </div>
            <div className="rounded-2xl border border-cyan-500/40 bg-cyan-500/10 p-8 backdrop-blur-md">
              <div className="text-5xl font-black text-cyan-300">8000+</div>
              <p className="mt-2 text-lg font-semibold">Custom PCs Delivered</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-md sm:col-span-2 lg:col-span-1">
              <p className="text-xs uppercase tracking-wide text-cyan-300">
                Our Promise
              </p>
              <p className="mt-3 text-lg font-semibold">
                Transparent pricing • Genuine parts • Lifetime support
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full bg-white/10 px-4 py-1.5">No hidden costs</span>
                <span className="rounded-full bg-white/10 px-4 py-1.5">Data-safe repairs</span>
                <span className="rounded-full bg-cyan-500/20 px-4 py-1.5">24/7 WhatsApp help</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values - Same glass cards */}
      <section className="py-20 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-16">
            Why People Choose Isuri
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Real Humans, Real Help",
                desc: "No bots. No scripts. Just friendly experts who actually care.",
                highlight: true,
              },
              {
                title: "Genuine Parts Only",
                desc: "Every component is original. Every warranty is honored.",
              },
              {
                title: "Clear & Fair Pricing",
                desc: "What you see is what you pay. No surprises. Ever.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`rounded-2xl border p-8 backdrop-blur-md transition-all hover:scale-105 ${
                  value.highlight
                    ? "border-cyan-500/50 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <h3 className="text-2xl font-bold text-cyan-300 mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Matching Home perfectly */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 via-indigo-900/30 to-violet-900/30" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8">
            Ready to Level Up?
          </h2>
          <p className="text-xl md:text-2xl text-cyan-100 mb-12 max-w-3xl mx-auto">
            Whether you're a student, gamer, creator, or business — we’ll build the perfect machine for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-12 py-5 text-xl font-bold text-slate-900 shadow-2xl shadow-cyan-500/50 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/70 hover:scale-110"
            >
              START BUILDING NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}