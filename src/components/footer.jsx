
import { Link } from "react-router-dom";
import { BiMapPin, BiPhone, BiMailSend, BiChevronRight } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="w-full bg-accent text-primary mt-auto">
      {/* Top Section - Main Content */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            
            {/* Brand & Logo */}
            <div className="space-y-6">
              <div className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="Isuri Technologies Logo" 
                  className="h-20 object-contain drop-shadow-lg" 
                />
              </div>
              <p className="text-sm leading-relaxed text-primary/80 max-w-xs">
                Premium custom PC builds, genuine components, expert repairs, and trusted IT solutions across Sri Lanka since 2015.
              </p>
              <p className="text-xs font-medium text-cyan-400">
                Your vision. Our expertise. Built to perform.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:ml-8">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <BiChevronRight className="text-cyan-400" />
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/" className="hover:text-cyan-400 transition flex items-center gap-2 group">
                    <span className="w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-6"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-cyan-400 transition flex items-center gap-2 group">
                    <span className="w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-6"></span>
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-cyan-400 transition flex items-center gap-2 group">
                    <span className="w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-6"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contacts" className="hover:text-cyan-400 transition flex items-center gap-2 group">
                    <span className="w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-6"></span>
                    Contact
                  </Link>
                </li>

              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <BiChevronRight className="text-cyan-400" />
                Our Services
              </h3>
              <ul className="space-y-3 text-sm text-primary/80">
                <li>Custom PC Building</li>
                <li>Gaming Rig Assembly</li>
                <li>Laptop & Desktop Repairs</li>
                <li>Component Upgrades</li>
                <li>On-site IT Support</li>
                <li>Data Recovery</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <BiChevronRight className="text-cyan-400" />
                Get in Touch
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <BiMapPin className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-primary/80">
                    No. 45, Galle Road,<br />
                    Colombo 06, Sri Lanka
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <BiPhone className="text-cyan-400" />
                  <a href="tel:+94771234567" className="hover:text-cyan-400 transition">
                    +94 77 123 4567
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <BiMailSend className="text-cyan-400" />
                  <a href="mailto:info@isuritechnologies.com" className="hover:text-cyan-400 transition">
                    info@isuritechnologies.com
                  </a>
                </li>
                <li className="flex items-center gap-3">

                  <a 
                    href="https://wa.me/94771234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition font-medium"
                  >
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright */}
      <div className="bg-black/30 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-primary/70">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-cyan-400">Isuri Technologies</span>. 
            All rights reserved. | Crafted with precision in Sri Lanka.
          </p>
        </div>
      </div>
    </footer>
  );
}