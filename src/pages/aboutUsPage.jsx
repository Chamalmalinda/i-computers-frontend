import React from "react";

export default function AboutUsPage() {
  return (
    <div className="w-full min-h-[calc(100vh-100px)] bg-[#f8fafc] text-[#1e293b]">
      <div className="w-full h-[120px] sticky top-0 bg-white flex items-center justify-center shadow-md z-20">
        <div className="max-w-6xl w-full px-6">
          <h1 className="text-3xl font-extrabold">About Us</h1>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="rounded-2xl bg-white/80 shadow-lg p-8 mb-8 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-sm">
                Our Story
              </p>
              <h2 className="text-4xl lg:text-5xl font-extrabold mt-6 leading-tight">
                Built for performance, designed for people.
              </h2>
              <p className="text-[#374151] mt-4 text-lg leading-relaxed">
                We create confident shopping experiences by combining thoughtful design,
                reliable technology, and a people-first approach. From day one our focus
                has been simple: make it easy for customers to discover great products and
                trust the stores behind them.
              </p>
              <div className="mt-6 flex gap-4">
                <button className="px-5 py-3 bg-accent text-white rounded-lg font-medium shadow-sm hover:opacity-95 transition">
                  Shop Now
                </button>
                <button
                  onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
                  className="px-5 py-3 border border-accent text-accent rounded-lg font-medium bg-white hover:bg-accent/5 transition"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/about-hero.jpg"
                  alt="About hero"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute right-6 bottom-6 bg-white rounded-2xl p-4 shadow-lg w-64">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-500"></div>
                  <div>
                    <div className="text-sm font-semibold">Trusted Quality</div>
                    <div className="text-xs text-[#6b7280]">Curated & tested</div>
                  </div>
                </div>
                <div className="mt-3 text-sm text-[#374151]">
                  We partner with trusted brands and perform strict quality checks on
                  every product listed on our platform.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-[#374151] mt-4 leading-relaxed">
              Deliver an effortless shopping experience that respects your time and
              priorities. We aim to combine speed, transparency, and exceptional
              customer support so every purchase feels like the right one.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3">
              <li className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full bg-accent mt-1"></div>
                <div>
                  <div className="font-semibold">Customer-first decisions</div>
                  <div className="text-sm text-[#6b7280]">Every feature built with users in mind.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full bg-accent mt-1"></div>
                <div>
                  <div className="font-semibold">Fast, reliable platform</div>
                  <div className="text-sm text-[#6b7280]">Performance that scales with you.</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-[#374151] mt-4 leading-relaxed">
              To be the most trusted and efficient marketplace where discovery meets
              certainty — helping customers find products they love with confidence and
              speed.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-gray-100">
                <div className="text-sm font-semibold">Scale with integrity</div>
                <div className="text-xs text-[#6b7280] mt-1">Growth without compromise.</div>
              </div>
              <div className="p-4 rounded-lg border border-gray-100">
                <div className="text-sm font-semibold">Sustainable operations</div>
                <div className="text-xs text-[#6b7280] mt-1">Long-term thinking, every day.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-6">Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-lg border border-gray-100">
              <div className="font-semibold">Reliability</div>
              <div className="text-sm text-[#6b7280] mt-3">Always dependable, always accurate.</div>
            </div>

            <div className="p-5 rounded-lg border border-gray-100">
              <div className="font-semibold">People-first</div>
              <div className="text-sm text-[#6b7280] mt-3">Design and decisions centered on people.</div>
            </div>

            <div className="p-5 rounded-lg border border-gray-100">
              <div className="font-semibold">Excellence</div>
              <div className="text-sm text-[#6b7280] mt-3">High standards across product and service.</div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg border border-gray-100 flex flex-col">
              <div className="text-lg font-semibold text-accent">Curated Selection</div>
              <div className="text-sm text-[#6b7280] mt-2">Handpicked products from trusted brands.</div>
            </div>
            <div className="p-4 rounded-lg border border-gray-100 flex flex-col">
              <div className="text-lg font-semibold text-accent">Transparent Pricing</div>
              <div className="text-sm text-[#6b7280] mt-2">No hidden fees, clear checkout.</div>
            </div>
            <div className="p-4 rounded-lg border border-gray-100 flex flex-col">
              <div className="text-lg font-semibold text-accent">Fast Support</div>
              <div className="text-sm text-[#6b7280] mt-2">Responsive help when you need it most.</div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-6">Meet the Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
              <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-100">
                <img src="/team1.jpg" alt="team" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 font-semibold">Naveen Perera</div>
              <div className="text-sm text-[#6b7280]">Founder & CEO</div>
              <div className="text-sm text-[#6b7280] mt-2">Building reliable shopping experiences for everyone.</div>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
              <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-100">
                <img src="/team2.jpg" alt="team" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 font-semibold">Sithara Jay</div>
              <div className="text-sm text-[#6b7280]">Head of Product</div>
              <div className="text-sm text-[#6b7280] mt-2">Designing intuitive, high-impact product experiences.</div>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
              <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-100">
                <img src="/team3.jpg" alt="team" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 font-semibold">Chamali Rodrigo</div>
              <div className="text-sm text-[#6b7280]">Engineering Lead</div>
              <div className="text-sm text-[#6b7280] mt-2">Building systems for scale and reliability.</div>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
              <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-100">
                <img src="/team4.jpg" alt="team" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 font-semibold">Ruwan Silva</div>
              <div className="text-sm text-[#6b7280]">Customer Success</div>
              <div className="text-sm text-[#6b7280] mt-2">Ensuring customers have outstanding support experiences.</div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-8 shadow-lg mb-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Journey</h3>
          <p className="text-[#374151] mb-6">We’re just getting started. Help us build something exceptional.</p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-accent text-white rounded-lg font-semibold shadow hover:opacity-95 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-accent text-accent rounded-lg font-semibold bg-white hover:bg-accent/5 transition">
              Contact Sales
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
