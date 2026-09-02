"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    label: "Products",
    href: "/products",
    children: [
      { href: "/products#tablets", label: "Tablets & Capsules" },
      { href: "/products#syrups", label: "Syrups & Suspensions" },
      { href: "/products#injectables", label: "Injectables" },
      { href: "/products#ointments", label: "Ointments & Creams" },
    ],
  },
  //{ href: "/franchise", label: "PCD Franchise" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#154360] text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+917710778868" className="flex items-center gap-1.5 hover:text-green-300">
              <Phone size={14} /> +91 77107 78868
            </a>
            <a href="mailto:aausidhi@gmail.com" className="flex items-center gap-1.5 hover:text-green-300">
              <Mail size={14} /> aausidhi@gmail.com
            </a>
          </div>

        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-white shadow-sm"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center justify-center w-30 h-12 overflow-hidden">
              <img
                src="/images/Aausidhi_healthcare_logo.png"
                alt="Aausidhi Healthcare Logo"
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-[#1c2833] text-sm font-medium nav-link hover:text-[#1a5276]">
                      {link.label}
                      <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 pt-2 w-52 z-50">
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a5276] font-medium"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link font-medium text-sm hover:text-[#1a5276] ${pathname === link.href
                      ? "text-[#1a5276] active"
                      : "text-[#1c2833]"
                      }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-[#27ae60] hover:bg-[#1e8449] text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-[#1a5276]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 shadow-lg">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href || "#"}
                    className="block py-3 px-2 text-[#1c2833] font-medium border-b border-gray-50 hover:text-[#1a5276]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-gray-600 hover:text-[#1a5276]"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact/#contactForm"
                className="mt-3 bg-[#27ae60] text-white text-center py-3 rounded-full font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
