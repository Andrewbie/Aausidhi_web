import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export default function ScrollingProducts() {
  // Read all images from the public/images/products directory dynamically
  const productsDir = path.join(process.cwd(), 'public', 'images', 'products');
  let products: { name: string; image: string }[] = [];
  
  try {
    if (fs.existsSync(productsDir)) {
      const files = fs.readdirSync(productsDir);
      products = files
        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
        .map(file => {
          // Remove extension and replace hyphens/underscores with spaces for a cleaner name
          const name = file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
          return {
            name,
            image: `/images/products/${file}`
          };
        });
    }
  } catch (error) {
    console.error("Error reading products directory:", error);
  }

  if (products.length === 0) {
    return null; // Do not render if no images are present
  }

  return (
    <section className="py-16 bg-white overflow-hidden border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <p className="text-[#27ae60] font-semibold text-sm tracking-widest uppercase mb-2">Featured Products</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276] section-title">
          Our Top Formulations
        </h2>
      </div>

      {/* Scrolling Container */}
      <div className="relative w-full flex overflow-hidden group py-4">
        {/* Gradient fades for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex w-max animate-marquee items-center gap-8 px-4">
          {[...products, ...products].map((product, idx) => (
            <Link key={idx} href="/products" className="shrink-0 group/card">
              <div className="w-64 h-80 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-full h-48 relative flex items-center justify-center bg-gray-50/50 rounded-xl mb-4 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="max-w-full max-h-full object-contain p-2 group-hover/card:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-[#1a5276] text-center text-[15px] leading-tight line-clamp-2 capitalize">{product.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
