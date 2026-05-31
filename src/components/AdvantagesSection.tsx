import { motion } from 'motion/react';
import { CheckCircle, Shield, Leaf, Users, Award } from 'lucide-react';

const advantages = [
  { title: "BPOM Resmi", icon: CheckCircle },
  { title: "Halal Indonesia", icon: Shield },
  { title: "Bahan Herbal Berkualitas", icon: Leaf },
  { title: "Aman Digunakan", icon: Shield },
  { title: "Komunitas Besar", icon: Users },
  { title: "Sistem Kemitraan Terpercaya", icon: Award },
];

export const AdvantagesSection = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <h2 className="text-4xl font-serif font-bold text-center text-maroon mb-16">Keunggulan SR12</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {advantages.map((adv, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10 }}
          className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
        >
          <adv.icon className="w-12 h-12 text-gold mb-4" />
          <h3 className="font-semibold text-lg">{adv.title}</h3>
        </motion.div>
      ))}
    </div>
  </section>
);
