/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './components/Logo';
import { AboutSection } from './components/AboutSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { ProductsSection } from './components/ProductsSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="fixed w-full z-50 bg-white/95 backdrop-blur shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Logo className="w-24" />
          <div className="hidden md:flex space-x-8 font-medium">
            {['Tentang', 'Produk', 'Kemitraan', 'Testimoni'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-[#800020] transition">
                {item}
              </a>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-maroon text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Sehat, Cantik, dan Berkah <span className="text-gold">Bersama SR12</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              SR12 Herbal Skincare menghadirkan produk kosmetik dan herbal berkualitas tinggi yang telah dipercaya jutaan pelanggan di Indonesia.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gold px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">Lihat Produk</button>
              <button className="border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-white transition">Gabung Kemitraan</button>
            </div>
          </motion.div>
          <div className="h-96 bg-gray-300 rounded-3xl" /> {/* Placeholder for image */}
        </div>
      </section>
      
      <AboutSection />
      <AdvantagesSection />
      <ProductsSection />
      <Footer />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/yournumber"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
