import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Our Products" },
  { href: "/contact", label: "Contact Us" },
];

const productCategories = [
  "Tablets & Capsules",
  "Syrups & Suspensions",
  "Injectables",
  "Ointments & Creams",
  "Nutraceuticals",
  "Derma Range",
];

export default function Footer() {
  return (
    <footer className="bg-[#0d2137] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div>
            <div className="flex items-center mb-5">
              <div className="bg-white w-40 rounded-md">
                <img
                  src="/images/Aausidhi_healthcare_logo.png"
                  alt="Aausidhi Healthcare Logo"
                  className="h-20 w-auto object-contain mix-blend-multiply"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Delivering quality medicines with trust and care. We are committed
              to improving lives through pharmaceutical excellence across India.
            </p>
            {/* Certifications */}
            {/* <div className="flex flex-wrap gap-2">
              {["ISO 9001:2015", "WHO-GMP", "DCGI Approved"].map((cert) => (
                <span
                  key={cert}
                  className="bg-[#1a5276]/50 text-xs px-2.5 py-1 rounded-full text-blue-200 border border-blue-800/40"
                >
                  {cert}
                </span>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-[#27ae60] rounded" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#27ae60] text-sm group"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative inline-block">
              Our Products
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-[#27ae60] rounded" />
            </h3>
            <ul className="space-y-3">
              {productCategories.map((cat) => (
                <li key={cat}>
                  <Link
                    href="/products"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#27ae60] text-sm group"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-[#27ae60] rounded" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-[#27ae60] mt-0.5 shrink-0" />
                <span>
                  Aausidhi Healthcare, Plot no. 661, <br /> First Floor, Ind Area - 2,<br />
                  Chandigarh, Chandigarh – 160002, India
                </span>
              </li>
              <li>
                <a
                  href="tel:+917710778868"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#27ae60] text-sm"
                >
                  <Phone size={16} className="text-[#27ae60]" />
                  +91 77107 78868
                </a>
              </li>
              <li>
                <a
                  href="mailto:aausidhi@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#27ae60] text-sm"
                >
                  <Mail size={16} className="text-[#27ae60]" />
                  aausidhi@gmail.com
                </a>
              </li>
            </ul>
            {/* Social */}

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Aausidhi Healthcare. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
