import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Award, Target, Eye, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Aausidhi Healthcare",
  description:
    "Learn about Aausidhi Healthcare — our story, mission, vision, and commitment to quality pharmaceutical products.",
};

const milestones = [
  { year: "2010", event: "Company Founded", desc: "Started with a vision to provide quality medicines to all." },
  { year: "2013", event: "GMP Certification", desc: "Achieved WHO-GMP certification for our manufacturing unit." },
  { year: "2016", event: "Pan-India Launch", desc: "Expanded distribution to 15+ states across India." },
  { year: "2019", event: "500+ Products", desc: "Crossed milestone of 500 pharmaceutical products." },
  { year: "2022", event: "ISO Certified", desc: "Received ISO 9001:2015 certification." },
  { year: "2024", event: "1000+ Partners", desc: "Built a network of 1000+ PCD franchise partners." },
];

const teamMembers = [
  { name: "Mr. [Name]", role: "Managing Director", initials: "MD" },
  { name: "Mr. [Name]", role: "Head of Operations", initials: "HO" },
  { name: "Dr. [Name]", role: "Chief Medical Officer", initials: "CM" },
  { name: "Mr. [Name]", role: "Sales Director", initials: "SD" },
];

const values = [
  { icon: "🎯", title: "Quality First", desc: "Every product undergoes strict quality control before reaching customers." },
  { icon: "🤝", title: "Integrity", desc: "Transparent and ethical business practices with all stakeholders." },
  // { icon: "💡", title: "Innovation", desc: "Continuously investing in R&D for better healthcare solutions." },
  { icon: "🌱", title: "Sustainability", desc: "Committed to eco-friendly manufacturing and responsible business." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="hero-gradient py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-2">Who We Are</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Aausidhi Healthcare</h1>
          <p className="text-blue-200 text-lg">
            A trusted name in the Indian pharmaceutical company, committed to better health for all.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <img
              src="/images/manufacturing_facility.jpg"
              alt="Manufacturing Facility and R&D"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div>
            <p className="text-[#27ae60] font-semibold text-sm tracking-widest uppercase mb-2">Our Story</p>
            <h2 className="text-3xl font-bold text-[#1a5276] mb-5">
              Building Trust Through Quality Since 2017
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Aausidhi Healthcare was founded with a simple yet powerful mission — to make quality
              medicines accessible and affordable for every Indian. Starting from a small unit, we have
              grown into a respected pharmaceutical company with a pan-India presence.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our manufacturing facility is equipped with the latest machinery and operated by
              experienced pharmaceutical professionals. Every medicine we produce adheres to strict
              quality standards — from raw material sourcing to final packaging.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[["100+", "Products"], ["10+", "States"], ["100+", "Partners"], ["10+", "Years"]].map(([val, lbl]) => (
                <div key={lbl} className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#27ae60]">{val}</div>
                  <div className="text-sm text-gray-500 mt-1">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-[#1a5276] rounded-2xl flex items-center justify-center mb-5">
                <Target size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a5276] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver high-quality, safe, and effective pharmaceutical products
                that improve the health and well-being of people across India — at affordable prices
                and with the highest standards of ethics.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-[#27ae60] rounded-2xl flex items-center justify-center mb-5">
                <Eye size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a5276] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become one of India's most trusted pharmaceutical companies — known for quality,
                innovation, and accessibility — while expanding our global footprint in the coming years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#27ae60] font-semibold text-sm tracking-widest uppercase mb-2">What Drives Us</p>
            <h2 className="text-3xl font-bold text-[#1a5276] section-title">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-5xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="bg-gray-50 rounded-2xl p-7 text-center card-hover border border-gray-100">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-[#1a5276] text-lg mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#27ae60] font-semibold text-sm tracking-widest uppercase mb-2">Accreditations</p>
            <h2 className="text-3xl font-bold text-[#1a5276] section-title">Certifications & Awards for Manufacturing Units</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { cert: "ISO 9001:2015", body: "Bureau Veritas" },
              { cert: "WHO-GMP", body: "World Health Organization" },
              { cert: "DCGI Approved", body: "Drugs Controller General of India" },
              { cert: "GMP Certified", body: "Good Manufacturing Practice" },
            ].map((c) => (
              <div key={c.cert} className="bg-gray-50 rounded-2xl p-7 text-center border border-gray-100 card-hover">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a5276] to-[#27ae60] flex items-center justify-center mx-auto mb-4">
                  <Award size={28} className="text-white" />
                </div>
                <div className="font-bold text-[#1a5276] text-lg mb-1">{c.cert}</div>
                <div className="text-gray-500 text-sm">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a5276] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Know More?</h2>
          <p className="text-blue-200 mb-8">Connect with us today and learn how Aausidhi Healthcare can be your trusted pharma partner.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#27ae60] hover:bg-[#1e8449] text-white px-8 py-3.5 rounded-full font-bold shadow-lg">
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
