"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle, FlaskConical, Shield, Globe, Users } from "lucide-react";

const stats = [
  { value: "500+", label: "Products" },
  { value: "15+", label: "Years Experience" },
  { value: "20+", label: "States Covered" },
  { value: "1000+", label: "Happy Partners" },
];

const features = [
  { icon: Shield, title: "WHO-GMP Certified", desc: "Manufactured in WHO-GMP compliant facilities ensuring top-notch quality." },
  // { icon: FlaskConical, title: "R&D Driven", desc: "Dedicated R&D team constantly innovating for better healthcare solutions." },
  { icon: Globe, title: "Pan-India Reach", desc: "Strong distribution network spanning 20+ states across India." },
  { icon: Users, title: "Franchise Support", desc: "Comprehensive PCD franchise support with promotional materials & training." },
];

const productCategories = [
  { title: "Tablets & Capsules", count: "150+ products", color: "from-blue-500 to-blue-700", image: "/images/Limica Plus Tablets.jpeg" },
  { title: "Syrups & Suspensions", count: "80+ products", color: "from-green-500 to-green-700", image: "/images/Xarodol-plus Suspension.jpeg" },
  { title: "Injectables", count: "60+ products", color: "from-purple-500 to-purple-700", image: "/images/Xarodol Injection.jpeg" },
  { title: "Ointments & Creams", count: "50+ products", color: "from-orange-500 to-orange-600" },
  { title: "Nutraceuticals", count: "70+ products", color: "from-teal-500 to-teal-700" },
  { title: "Derma Range", count: "40+ products", color: "from-pink-500 to-pink-700" },
];

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    location: "Delhi",
    text: "Aausidhi Healthcare has been my trusted pharma partner for 5 years. Excellent quality and timely delivery always.",
    role: "Medical Practitioner",
  },
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "Best PCD franchise experience. The support team is always available and the product range is outstanding.",
    role: "Franchise Partner",
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad",
    text: "Very professional company with genuine certifications. Proud to be associated with Aausidhi Healthcare.",
    role: "Distributor",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-green-400 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              India's Trusted Pharmaceutical Company
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Quality Medicines,{" "}
              <span className="text-green-400">Trusted</span>{" "}
              Healthcare
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl">
              Aausidhi Healthcare is dedicated to delivering high-quality pharmaceutical
              products that improve lives. From tablets to injectables — excellence in
              every medicine.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-[#27ae60] hover:bg-[#1e8449] text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 shadow-lg"
              >
                Explore Products <ArrowRight size={18} />
              </Link>
              {/* <Link
                href="/franchise"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold backdrop-blur-sm"
              >
                PCD Franchise
              </Link> */}
            </div>
            {/* Trust badges */}
            {/* <div className="flex flex-wrap gap-3 mt-8">
              {["ISO 9001:2015", "WHO-GMP", "DCGI Approved", "GMP Certified"].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-green-300 text-sm">
                  <CheckCircle size={14} />
                  {badge}
                </div>
              ))}
            </div> */}
          </div>

          {/* Hero image */}
          <div className="hidden lg:block relative z-10">
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src="/images/hero-image.jpg"
                alt="Heart capsules in palms"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      {/* <section className="bg-[#1a5276] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <div className="text-4xl font-bold text-green-400 mb-1">{stat.value}</div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ===== ABOUT SNIPPET ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <img
              src="/images/manufacturing_facility.jpg"
              alt="Manufacturing Facility and R&D"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-[#27ae60] font-semibold text-sm tracking-widest uppercase mb-2">
              About Aausidhi Healthcare
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276] mb-5">
              Committed to Better Health Since 2017
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Aausidhi Healthcare is a fast-growing pharmaceutical company dedicated to manufacturing
              and marketing high-quality medicines across India. Our state-of-the-art facilities,
              experienced team, and customer-first approach set us apart.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              With 500+ products spanning multiple therapeutic segments, we serve medical
              professionals, hospitals, and franchise partners across 20+ states.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "WHO-GMP certified manufacturing plant",
                "Experienced team of 100+ professionals",
                "PAN India distribution network",
                "Transparent business practices",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-gray-700 text-sm">
                  <CheckCircle size={18} className="text-[#27ae60] shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#1a5276] hover:bg-[#154360] text-white px-7 py-3 rounded-full font-semibold"
            >
              Know More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PRODUCT CATEGORIES ===== */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#27ae60] font-semibold text-sm tracking-widest uppercase mb-2">Our Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276] section-title">
              Product Categories
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {productCategories.map((cat) => (
              <Link key={cat.title} href="/products" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover">
                  {/* Product image */}
                  {cat.image ? (
                    <div className="h-44 w-full relative overflow-hidden bg-white flex items-center justify-center">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className={`h-44 bg-gradient-to-br ${cat.color} flex items-center justify-center text-white`}>
                      <div className="text-center">
                        <div className="text-5xl mb-2">💊</div>
                        <p className="text-sm font-medium opacity-90">[Add Product Image]</p>
                      </div>
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-bold text-[#1a5276] text-lg mb-1">{cat.title}</h3>
                    <p className="text-gray-500 text-sm mb-3">{cat.count}</p>
                    <div className="flex items-center gap-1 text-[#27ae60] text-sm font-semibold group-hover:gap-2 transition-all">
                      View Products <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border-2 border-[#1a5276] text-[#1a5276] hover:bg-[#1a5276] hover:text-white px-8 py-3 rounded-full font-semibold"
            >
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#27ae60] font-semibold text-sm tracking-widest uppercase mb-2">Our Strengths</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276] section-title">
              Why Choose Aausidhi?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-gray-50 rounded-2xl p-7 text-center card-hover border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1a5276] to-[#27ae60] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md">
                  <f.icon size={28} className="text-white" />
                </div>
                <h3 className="font-bold text-[#1a5276] text-lg mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PCD FRANCHISE BANNER ===== */}
      <section className="py-20 bg-gradient-to-r from-[#1a5276] to-[#27ae60] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Start Your Business Now!
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Join our growing network of partners. Get exclusive rights, marketing
            support, and a wide product range with great margins.
          </p>
          <div className="flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-semibold"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA CONTACT ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276] mb-5">
            Ready to Partner with Us?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Get in touch today and explore the opportunities with Aausidhi Healthcare.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#27ae60] hover:bg-[#1e8449] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg"
          >
            Contact Us Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
