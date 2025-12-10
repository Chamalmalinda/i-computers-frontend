import React from "react";

export default function contactPage() {
  return (
    <div className="w-full min-h-[calc(100vh-100px)] bg-[#f8fafc] text-[#1e293b]">
      {/* Top Bar */}
      <div className="w-full h-[120px] sticky top-0 bg-white flex items-center justify-center shadow-md z-20">
        <div className="max-w-6xl w-full px-6">
          <h1 className="text-3xl font-extrabold">Contact Us</h1>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero / Intro */}
        <section className="bg-white/80 rounded-2xl shadow-lg p-8 mb-10">
          <h2 className="text-4xl font-extrabold mb-4">We’d love to hear from you</h2>
          <p className="text-[#374151] text-lg leading-relaxed">
            Whether you have a question, feedback, or need assistance, our team is always
            ready to support you. Reach out using any of the methods below.
          </p>
        </section>

        {/* Contact Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="text-xl font-bold mb-2 text-accent">📍 Our Location</div>
            <p className="text-[#6b7280] text-sm">
              123 Market Street<br />Colombo, Sri Lanka
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="text-xl font-bold mb-2 text-accent">📞 Phone</div>
            <p className="text-[#6b7280] text-sm">
              +94 71 123 4567<br />+94 75 987 6543
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="text-xl font-bold mb-2 text-accent">✉️ Email</div>
            <p className="text-[#6b7280] text-sm">
              support@yourstore.com<br />sales@yourstore.com
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-medium mb-2">Your Name</label>
              <input
                type="text"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none transition hover:border-accent"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium mb-2">Your Email</label>
              <input
                type="email"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none transition hover:border-accent"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="font-medium mb-2">Subject</label>
              <input
                type="text"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none transition hover:border-accent"
                placeholder="What is your message about?"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="font-medium mb-2">Message</label>
              <textarea
                rows="5"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none transition hover:border-accent"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="px-8 py-3 rounded-lg font-semibold bg-accent text-white shadow hover:opacity-90 transition-all hover:scale-[1.03]"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* CTA */}
        <section className="text-center bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
          <p className="text-[#374151] mb-6">
            Our support team is available 24/7 to assist you with urgent inquiries.
          </p>
          <button className="px-6 py-3 bg-accent text-white rounded-lg font-semibold shadow hover:opacity-90 hover:scale-[1.03] transition">
            Chat With Support
          </button>
        </section>
      </main>
    </div>
  );
}
