'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Weight, FlaskConical, Recycle } from 'lucide-react';

const benefits = [
  {
    key: 'hygiene',
    icon: Shield,
    title: 'Higiene',
    description: 'Fácil de lavar y sanitizar, sin absorción de humedad u olores'
  },
  {
    key: 'durability',
    icon: Zap,
    title: 'Durabilidad',
    description: 'Resistente al desgaste y condiciones adversas'
  },
  {
    key: 'weight',
    icon: Weight,
    title: 'Peso Constante',
    description: 'Peso uniforme sin variaciones por humedad'
  },
  {
    key: 'chemical',
    icon: FlaskConical,
    title: 'Resistencia a Químicos',
    description: 'Compatible con productos químicos y sanitizantes'
  },
  {
    key: 'recyclable',
    icon: Recycle,
    title: 'Reciclables',
    description: 'Material reciclado, amigable con el medio ambiente'
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-gray-ui">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-charcoal mb-4">
            Beneficios de Nuestros Productos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-charcoal mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
