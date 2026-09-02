import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Products | Aausidhi Healthcare",
  description:
    "Explore our wide range of pharmaceutical products including tablets, capsules, syrups, injectables, ointments, nutraceuticals and more.",
};

const categories = [
  {
    id: "tablets",
    title: "Tablets & Capsules",
    desc: "A comprehensive range of tablets and capsules for various therapeutic needs — antibiotics, analgesics, antacids, and more.",
    emoji: "💊",
    color: "from-blue-500 to-blue-700",
    products: [
      "Amoxicillin 500mg Capsules",
      "Paracetamol 500mg Tablets",
      "Metformin 500mg Tablets",
      "Atorvastatin 10mg Tablets",
      "Omeprazole 20mg Capsules",
      "Azithromycin 250mg Tablets",
      "Cetirizine 10mg Tablets",
      "Pantoprazole 40mg Tablets",
    ],
  },
  {
    id: "syrups",
    title: "Syrups & Suspensions",
    emoji: "🧴",
    color: "from-green-500 to-green-700",
    desc: "Palatable and effective syrups and suspensions for adults and children across multiple therapeutic segments.",
    products: [
      "Amoxicillin 250mg/5ml Suspension",
      "Paracetamol Syrup 120mg/5ml",
      "Ibuprofen Suspension 100mg/5ml",
      "Cetirizine Syrup 5mg/5ml",
      "Multivitamin Syrup",
      "Cough Syrup (Dry)",
      "Iron & Folic Acid Syrup",
      "Calcium + Vitamin D3 Syrup",
    ],
  },
  {
    id: "injectables",
    title: "Injectables",
    emoji: "💉",
    color: "from-purple-500 to-purple-700",
    desc: "High-quality sterile injectables manufactured under strict aseptic conditions for hospital and clinical use.",
    products: [
      "Ceftriaxone 1gm Injection",
      "Amikacin 500mg Injection",
      "Ondansetron 4mg/2ml Injection",
      "Pantoprazole 40mg Injection",
      "Tramadol 50mg Injection",
      "Dexamethasone 4mg Injection",
      "Vitamin B12 Injection",
      "Normal Saline 500ml IV Fluid",
    ],
  },
  {
    id: "ointments",
    title: "Ointments & Creams",
    emoji: "🧪",
    color: "from-orange-500 to-orange-600",
    desc: "Dermatologically tested topical preparations for skin conditions, pain relief, and wound management.",
    products: [
      "Clotrimazole 1% Cream",
      "Betamethasone Cream",
      "Diclofenac Gel 1%",
      "Mupirocin 2% Ointment",
      "Ketoconazole 2% Cream",
      "Calamine Lotion",
      "Hydroquinone 2% Cream",
      "Silver Sulfadiazine 1% Cream",
    ],
  },
  {
    id: "nutraceuticals",
    title: "Nutraceuticals",
    emoji: "🌿",
    color: "from-teal-500 to-teal-700",
    desc: "Premium nutraceutical products combining the goodness of nutrients and pharmaceuticals for overall wellness.",
    products: [
      "Omega-3 Fatty Acid Capsules",
      "Multivitamin + Minerals Tablets",
      "Calcium + Vitamin D3 Tablets",
      "Vitamin C 1000mg Effervescent",
      "Biotin 10mg Tablets",
      "Zinc + Vitamin C Tablets",
      "Liver Protect Capsules",
      "Protein Powder Supplement",
    ],
  },
  {
    id: "derma",
    title: "Derma Range",
    emoji: "✨",
    color: "from-pink-500 to-pink-700",
    desc: "Specialized dermatology range including sunscreens, moisturizers, anti-acne, and skin brightening products.",
    products: [
      "SPF 50+ Sunscreen Lotion",
      "Anti-Acne Face Wash",
      "Moisturizing Cream with Urea",
      "Kojic Acid + Arbutin Serum",
      "Anti-Dandruff Shampoo",
      "Hair Fall Control Serum",
      "Under Eye Cream",
      "Lip Lightening Balm",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <div className="hero-gradient py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-2">Our Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-blue-200 text-lg">
            500+ quality pharmaceutical products across multiple therapeutic segments.
          </p>
        </div>
      </div>

      {/* Category nav */}
      <div className="bg-white sticky top-20 z-30 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex gap-3 min-w-max">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-5 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:bg-[#1a5276] hover:text-white hover:border-[#1a5276] whitespace-nowrap"
              >
                {cat.emoji} {cat.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Products by Category */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {categories.map((cat, idx) => (
          <section key={cat.id} id={cat.id}>
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              {/* Image placeholder */}
              <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                <div className={`img-placeholder w-full h-72 bg-gradient-to-br ${cat.color} border-none`}>
                  <div className="text-6xl mb-3">{cat.emoji}</div>
                  <p className="text-white font-semibold">Add Category Image</p>
                  <p className="text-white/70 text-xs mt-1">Replace with your product image</p>
                </div>
              </div>

              {/* Info */}
              <div className={idx % 2 !== 0 ? "lg:order-1" : ""}>
                <h2 className="text-3xl font-bold text-[#1a5276] mb-3">{cat.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{cat.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.products.map((product) => (
                    <div
                      key={product}
                      className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2.5 border border-gray-100"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#27ae60] shrink-0" />
                      <span className="text-gray-700 text-sm">{product}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  * This is a sample list. Contact us for complete product catalogue.
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Download Catalogue CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1a5276] to-[#27ae60] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Get Our Full Product Catalogue</h2>
          <p className="text-blue-100 mb-8">
            Download our complete product list or contact us to request a customized product catalogue.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#1a5276] hover:bg-gray-100 px-8 py-3.5 rounded-full font-bold shadow-lg flex items-center gap-2"
            >
              Request Catalogue <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-semibold"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
