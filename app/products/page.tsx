import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Box, Tag, Percent } from "lucide-react";

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
      { name: "YOGACLAV LB 625 TAB ", composition: "Amoxicillin Trihydrate IP 500mg +Clavulenic acid 125mg + Lactobaccilus", pack: "1x10 Alu-Alu", mrp: "₹270.00", ptr: "₹110.00" },
      { name: "Paracetamol 500mg Tablets", composition: "Paracetamol IP 500mg", pack: "10x10 Blister", mrp: "₹30.00", ptr: "₹18.00" },
      { name: "Metformin 500mg Tablets", composition: "Metformin Hydrochloride IP 500mg (SR)", pack: "10x15 Blister", mrp: "₹45.00", ptr: "₹30.00" },
      { name: "Atorvastatin 10mg Tablets", composition: "Atorvastatin Calcium IP 10mg", pack: "10x10 Alu-Alu", mrp: "₹75.00", ptr: "₹50.00" },
      { name: "Omeprazole 20mg Capsules", composition: "Omeprazole IP 20mg", pack: "10x15 Strip", mrp: "₹55.00", ptr: "₹35.00" },
      { name: "Azithromycin 250mg Tablets", composition: "Azithromycin Dihydrate IP 250mg", pack: "10x6 Blister", mrp: "₹110.00", ptr: "₹75.00" },
      { name: "Cetirizine 10mg Tablets", composition: "Cetirizine Hydrochloride IP 10mg", pack: "10x10 Blister", mrp: "₹25.00", ptr: "₹15.00" },
      { name: "Pantoprazole 40mg Tablets", composition: "Pantoprazole Sodium IP 40mg", pack: "10x10 Alu-Alu", mrp: "₹95.00", ptr: "₹65.00" },
    ],
  },
  {
    id: "syrups",
    title: "Syrups & Suspensions",
    emoji: "🧴",
    color: "from-green-500 to-green-700",
    desc: "Palatable and effective syrups and suspensions for adults and children across multiple therapeutic segments.",
    products: [
      { name: "Amoxicillin 250mg/5ml Suspension", composition: "Amoxicillin Trihydrate 250mg / 5ml", pack: "60ml Bottle", mrp: "₹65.00", ptr: "₹45.00" },
      { name: "Paracetamol Syrup 120mg/5ml", composition: "Paracetamol 120mg / 5ml", pack: "60ml Bottle", mrp: "₹40.00", ptr: "₹25.00" },
      { name: "Ibuprofen Suspension 100mg/5ml", composition: "Ibuprofen 100mg / 5ml", pack: "100ml Bottle", mrp: "₹55.00", ptr: "₹35.00" },
      { name: "Cetirizine Syrup 5mg/5ml", composition: "Cetirizine Hydrochloride 5mg / 5ml", pack: "60ml Bottle", mrp: "₹35.00", ptr: "₹22.00" },
      { name: "Multivitamin Syrup", composition: "Vitamins & Essential Minerals", pack: "200ml Bottle", mrp: "₹120.00", ptr: "₹85.00" },
      { name: "Cough Syrup (Dry)", composition: "Dextromethorphan HBr 10mg + CPM 2mg", pack: "100ml Bottle", mrp: "₹85.00", ptr: "₹55.00" },
      { name: "Iron & Folic Acid Syrup", composition: "Ferrous Ascorbate + Folic Acid", pack: "200ml Bottle", mrp: "₹140.00", ptr: "₹95.00" },
      { name: "Calcium + Vitamin D3 Syrup", composition: "Calcium Carbonate + Vitamin D3", pack: "200ml Bottle", mrp: "₹110.00", ptr: "₹75.00" },
    ],
  },
  {
    id: "injectables",
    title: "Injectables",
    emoji: "💉",
    color: "from-purple-500 to-purple-700",
    desc: "High-quality sterile injectables manufactured under strict aseptic conditions for hospital and clinical use.",
    products: [
      { name: "Ceftriaxone 1gm Injection", composition: "Ceftriaxone Sodium 1000mg", pack: "1 Vial + WFI", mrp: "₹60.00", ptr: "₹40.00" },
      { name: "Amikacin 500mg Injection", composition: "Amikacin Sulphate 500mg / 2ml", pack: "2ml Ampoule", mrp: "₹45.00", ptr: "₹30.00" },
      { name: "Ondansetron 4mg/2ml Injection", composition: "Ondansetron 4mg / 2ml", pack: "2ml Ampoule", mrp: "₹15.00", ptr: "₹10.00" },
      { name: "Pantoprazole 40mg Injection", composition: "Pantoprazole 40mg (Lyophilized)", pack: "1 Vial + WFI", mrp: "₹45.00", ptr: "₹30.00" },
      { name: "Tramadol 50mg Injection", composition: "Tramadol Hydrochloride 50mg / ml", pack: "2ml Ampoule", mrp: "₹25.00", ptr: "₹16.00" },
      { name: "Dexamethasone 4mg Injection", composition: "Dexamethasone Sodium Phosphate 4mg", pack: "2ml Ampoule", mrp: "₹12.00", ptr: "₹8.00" },
      { name: "Vitamin B12 Injection", composition: "Methylcobalamin 1500mcg", pack: "2ml Ampoule", mrp: "₹35.00", ptr: "₹22.00" },
      { name: "Normal Saline 500ml IV Fluid", composition: "Sodium Chloride 0.9% w/v", pack: "500ml Bottle", mrp: "₹40.00", ptr: "₹28.00" },
    ],
  },
  {
    id: "ointments",
    title: "Ointments & Creams",
    emoji: "🧪",
    color: "from-orange-500 to-orange-600",
    desc: "Dermatologically tested topical preparations for skin conditions, pain relief, and wound management.",
    products: [
      { name: "Clotrimazole 1% Cream", composition: "Clotrimazole IP 1% w/w", pack: "15g Tube", mrp: "₹65.00", ptr: "₹45.00" },
      { name: "Betamethasone Cream", composition: "Betamethasone Valerate 0.1% w/w", pack: "20g Tube", mrp: "₹45.00", ptr: "₹30.00" },
      { name: "Diclofenac Gel 1%", composition: "Diclofenac Diethylamine 1.16% w/w", pack: "30g Tube", mrp: "₹85.00", ptr: "₹55.00" },
      { name: "Mupirocin 2% Ointment", composition: "Mupirocin USP 2% w/w", pack: "5g Tube", mrp: "₹110.00", ptr: "₹75.00" },
      { name: "Ketoconazole 2% Cream", composition: "Ketoconazole IP 2% w/w", pack: "15g Tube", mrp: "₹95.00", ptr: "₹65.00" },
      { name: "Calamine Lotion", composition: "Calamine IP 8% + Zinc Oxide 3%", pack: "100ml Bottle", mrp: "₹120.00", ptr: "₹85.00" },
      { name: "Hydroquinone 2% Cream", composition: "Hydroquinone USP 2% w/w", pack: "20g Tube", mrp: "₹145.00", ptr: "₹100.00" },
      { name: "Silver Sulfadiazine 1% Cream", composition: "Silver Sulfadiazine USP 1% w/w", pack: "50g Tube", mrp: "₹130.00", ptr: "₹90.00" },
    ],
  },
  {
    id: "nutraceuticals",
    title: "Nutraceuticals",
    emoji: "🌿",
    color: "from-teal-500 to-teal-700",
    desc: "Premium nutraceutical products combining the goodness of nutrients and pharmaceuticals for overall wellness.",
    products: [
      { name: "Omega-3 Fatty Acid Capsules", composition: "EPA 180mg + DHA 120mg", pack: "3x10 Softgel", mrp: "₹250.00", ptr: "₹170.00" },
      { name: "Multivitamin + Minerals Tablets", composition: "Vitamins, Minerals & Antioxidants", pack: "10x10 Alu-Alu", mrp: "₹180.00", ptr: "₹120.00" },
      { name: "Calcium + Vitamin D3 Tablets", composition: "Calcium Carbonate 500mg + Vit D3 250 IU", pack: "15x10 Blister", mrp: "₹95.00", ptr: "₹65.00" },
      { name: "Vitamin C 1000mg Effervescent", composition: "Vitamin C 1000mg + Zinc 10mg", pack: "20 Tabs Tube", mrp: "₹210.00", ptr: "₹145.00" },
      { name: "Biotin 10mg Tablets", composition: "Biotin 10mg", pack: "10x10 Alu-Alu", mrp: "₹190.00", ptr: "₹130.00" },
      { name: "Zinc + Vitamin C Tablets", composition: "Zinc 50mg + Vitamin C 500mg", pack: "10x10 Strip", mrp: "₹120.00", ptr: "₹80.00" },
      { name: "Liver Protect Capsules", composition: "Silymarin + L-Ornithine + L-Aspartate", pack: "10x10 Alu-Alu", mrp: "₹220.00", ptr: "₹150.00" },
      { name: "Protein Powder Supplement", composition: "Whey Protein + Vitamins + Minerals", pack: "200g Jar", mrp: "₹350.00", ptr: "₹240.00" },
    ],
  },
  {
    id: "derma",
    title: "Derma Range",
    emoji: "✨",
    color: "from-pink-500 to-pink-700",
    desc: "Specialized dermatology range including sunscreens, moisturizers, anti-acne, and skin brightening products.",
    products: [
      { name: "SPF 50+ Sunscreen Lotion", composition: "Octinoxate + Avobenzone + Oxybenzone", pack: "50ml Tube", mrp: "₹320.00", ptr: "₹220.00" },
      { name: "Anti-Acne Face Wash", composition: "Salicylic Acid 2% + Glycolic Acid 1%", pack: "100ml Tube", mrp: "₹250.00", ptr: "₹170.00" },
      { name: "Moisturizing Cream with Urea", composition: "Urea 10% + Lactic Acid 5%", pack: "50g Tube", mrp: "₹180.00", ptr: "₹120.00" },
      { name: "Kojic Acid + Arbutin Serum", composition: "Kojic Acid 2% + Alpha Arbutin 1%", pack: "30ml Bottle", mrp: "₹450.00", ptr: "₹310.00" },
      { name: "Anti-Dandruff Shampoo", composition: "Ketoconazole 2% + ZPTO 1%", pack: "100ml Bottle", mrp: "₹210.00", ptr: "₹145.00" },
      { name: "Hair Fall Control Serum", composition: "Minoxidil 5% + Finasteride 0.1%", pack: "60ml Spray", mrp: "₹550.00", ptr: "₹380.00" },
      { name: "Under Eye Cream", composition: "Vitamin K + Retinol + Peptides", pack: "15g Tube", mrp: "₹380.00", ptr: "₹260.00" },
      { name: "Lip Lightening Balm", composition: "Kojic Acid + Vitamin C + SPF 15", pack: "10g Jar", mrp: "₹190.00", ptr: "₹130.00" },
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
                className="px-5 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:bg-[#1a5276] hover:text-white hover:border-[#1a5276] whitespace-nowrap transition-colors"
              >
                {cat.emoji} {cat.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Products by Category */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {categories.map((cat, idx) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-32">
            <div className="mb-10 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 text-2xl mb-4 shadow-sm">
                {cat.emoji}
              </div>
              <h2 className="text-3xl font-bold text-[#1a5276] mb-3">{cat.title}</h2>
              <p className="text-gray-500 leading-relaxed max-w-3xl">{cat.desc}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {cat.products.map((product) => (
                <div
                  key={product.name}
                  className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow card-hover flex flex-col justify-between"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-[#1a5276] mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-500 font-medium">Composition: <span className="text-gray-700">{product.composition}</span></p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-50">
                    <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold border border-blue-100">
                      <Box size={14} /> Pack: {product.pack}
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold border border-green-100">
                      <Tag size={14} /> MRP: {product.mrp}
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold border border-purple-100">
                      <Percent size={14} /> PTR: {product.ptr}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Download Catalogue CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1a5276] to-[#27ae60] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Get Our Full Product Catalogue</h2>
          <p className="text-blue-100 mb-8">
            Download our complete product list or contact us to request a customized product catalogue.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#1a5276] hover:bg-gray-100 px-8 py-3.5 rounded-full font-bold shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
            >
              Request Catalogue <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-semibold transition-colors"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
