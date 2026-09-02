import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "PCD Franchise | Aausidhi Healthcare",
  description:
    "Join Aausidhi Healthcare's PCD Pharma Franchise program. Get exclusive rights, promotional support, and a wide product range with excellent profit margins.",
};

const benefits = [
  "Monopoly rights for your territory",
  "Wide product range of 500+ products",
  "WHO-GMP certified quality products",
  "Promotional & marketing support",
  "No sales target pressure",
  "Lucrative profit margins",
  "Timely delivery & packaging",
  "Experienced sales support team",
  "Low investment, high returns",
  "Regular product additions",
];

const steps = [
  { num: "01", title: "Enquire", desc: "Call or fill the contact form to express your interest in our PCD franchise." },
  { num: "02", title: "Discuss", desc: "Our team will connect with you to discuss terms, territory, and product range." },
  { num: "03", title: "Agreement", desc: "Sign the franchise agreement and confirm your territory allocation." },
  { num: "04", title: "Launch", desc: "Receive your first order with all marketing materials and start your business!" },
];

const promoMaterials = [
  "Visual Aid",
  "Product Catalogue",
  "Visiting Cards",
  "Letterhead",
  "Prescription Pad",
  "Reminder Cards",
  "Gift Articles",
  "Bag & Samples",
];

export default function FranchisePage() {
  return (
    <>
      {/* Page Header */}
      <div className="hero-gradient py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-2">Business Opportunity</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">PCD Pharma Franchise</h1>
          <p className="text-blue-200 text-lg">
            Start your own pharmaceutical business with Aausidhi Healthcare's proven franchise model.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-[#27ae60] hover:bg-[#1e8449] text-white px-8 py-3.5 rounded-full font-bold shadow-lg"
          >
            Apply Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* What is PCD */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#27ae60] font-semibold text-sm tracking-widest uppercase mb-2">Franchise Model</p>
            <h2 className="text-3xl font-bold text-[#1a5276] mb-5">What is PCD Pharma Franchise?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              PCD (Propaganda Cum Distribution) Pharma Franchise is a business model where a
              pharmaceutical company grants exclusive rights to an individual or business to sell
              and distribute its products in a specific geographic area.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              With Aausidhi Healthcare's PCD franchise, you get access to our full product portfolio,
              marketing support, and the backing of our trusted brand — allowing you to run a
              profitable pharmaceutical business with minimal investment.
            </p>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-bold text-[#1a5276] mb-3">Minimum Investment</h4>
              <p className="text-gray-600 text-sm">Starting at an affordable investment, with flexible payment options and credit facility for trusted partners.</p>
            </div>
          </div>
          <div className="img-placeholder w-full h-[400px]">
            <div className="text-5xl mb-3">🤝</div>
            <p className="font-semibold text-gray-500">Franchise Partner Meeting</p>
            <p className="text-xs text-gray-400 mt-1">Add franchise / business image here</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#27ae60] font-semibold text-sm tracking-widest uppercase mb-2">Why Partner With Us</p>
            <h2 className="text-3xl font-bold text-[#1a5276] section-title">Franchise Benefits</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <CheckCircle size={18} className="text-[#27ae60] mt-0.5 shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#27ae60] font-semibold text-sm tracking-widest uppercase mb-2">Simple Process</p>
            <h2 className="text-3xl font-bold text-[#1a5276] section-title">How to Get Started</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {steps.map((step) => (
              <div key={step.num} className="text-center card-hover">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a5276] to-[#27ae60] flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow-lg">
                  {step.num}
                </div>
                <h3 className="font-bold text-[#1a5276] text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Materials */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#27ae60] font-semibold text-sm tracking-widest uppercase mb-2">What You Get</p>
            <h2 className="text-3xl font-bold text-[#1a5276] section-title">Promotional Support</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {promoMaterials.map((mat) => (
              <div
                key={mat}
                className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm card-hover"
              >
                <div className="text-3xl mb-3">📦</div>
                <div className="font-semibold text-[#1a5276] text-sm">{mat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Quick Contact */}
      <section className="py-20 bg-gradient-to-r from-[#1a5276] to-[#27ae60]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Pharma Business?</h2>
          <p className="text-blue-100 mb-8">
            Connect with our franchise team today and get all the information you need to get started.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="bg-white text-[#1a5276] hover:bg-gray-100 px-8 py-3.5 rounded-full font-bold shadow-lg flex items-center gap-2"
            >
              Apply for Franchise <ArrowRight size={16} />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-green-200">
              <Phone size={16} /> +91 98765 43210
            </a>
            <a href="mailto:franchise@aausidhi.com" className="flex items-center gap-2 hover:text-green-200">
              <Mail size={16} /> franchise@aausidhi.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
