'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Utensils, Wheat, ShoppingCart, Pill, Ship } from 'lucide-react';

const industries = [
  {
    key: 'food',
    icon: Utensils,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    key: 'agriculture',
    icon: Wheat,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    key: 'retail',
    icon: ShoppingCart,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    key: 'pharmaceutical',
    icon: Pill,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    key: 'export',
    icon: Ship,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
  },
];

export default function IndustriesSection() {
  const t = useTranslations('industries');

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-charcoal mb-4">
            {t('title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-16 h-16 ${industry.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${industry.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-charcoal group-hover:text-primary transition-colors duration-200">
                  {t(industry.key)}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
