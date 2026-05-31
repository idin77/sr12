import { motion } from 'motion/react';

const products = [
  { name: "Go Milku", category: "Herbal", description: "Susu Etawa Bubuk" },
  { name: "Lemonkuh", category: "Herbal", description: "Minuman Kesehatan Lemon" },
  { name: "Daily Cover Natural", category: "Kosmetik", description: "Bedak Padat" },
  { name: "Madu Hutan Baduy", category: "Herbal", description: "Madu Alami" },
  { name: "V-Co Oil", category: "Skincare", description: "Virgin Coconut Oil" },
  { name: "Lip Care Series", category: "Kosmetik", description: "Lipstick & Perawatan Bibir" },
];

export const ProductsSection = () => {
    return (
      <section id="produk" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center text-maroon mb-16">Produk Unggulan</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="h-40 bg-gray-200 mb-4 rounded-xl flex items-center justify-center text-gray-500">Image</div>
              <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
              <p className="text-sm text-gold font-medium mb-1">{p.category}</p>
              <p className="text-sm text-gray-600">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    );
};
