'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { Pallet } from '@/data/pallets';
import { Box } from '@/data/boxes';

interface ProductCardProps {
  product: Pallet | Box;
  type: 'pallet' | 'box';
  locale: string;
}

export default function ProductCard({ product, type, locale }: ProductCardProps) {
  const isPallet = type === 'pallet';
  const pallet = isPallet ? product as Pallet : null;
  const box = !isPallet ? product as Box : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="card group hover:shadow-xl transition-all duration-300"
    >
      {/* Product Image */}
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <Image
          src={product.imagen}
          alt={product.nombre}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-charcoal group-hover:text-primary transition-colors duration-200">
          {product.nombre}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {product.descripcion}
        </p>

        {/* Specifications */}
        <div className="space-y-2">
          {isPallet && pallet && (
            <>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Dimensiones:</span>
                <span className="font-medium">
                  {pallet.dimensiones.ancho && pallet.dimensiones.largo
                    ? `${pallet.dimensiones.ancho} × ${pallet.dimensiones.largo}`
                    : `${pallet.dimensiones.ancho_cm} × ${pallet.dimensiones.largo_cm} cm`
                  }
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Carga Estática:</span>
                <span className="font-medium">{pallet.cargas.estatica_kg.toLocaleString()} kg</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Peso:</span>
                <span className="font-medium">{pallet.peso_kg} kg</span>
              </div>
            </>
          )}

          {!isPallet && box && (
            <>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Capacidad:</span>
                <span className="font-medium">{box.capacidad_kg} kg</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Dimensiones:</span>
                <span className="font-medium">
                  {box.dimensiones_exteriores_cm.largo} × {box.dimensiones_exteriores_cm.ancho} × {box.dimensiones_exteriores_cm.alto} cm
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Apilable:</span>
                <span className="font-medium">{box.apilable ? 'Sí' : 'No'}</span>
              </div>
            </>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-ui text-gray-charcoal text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-4">
          <Link
            href={`/${locale}/productos/${type === 'pallet' ? 'tarimas' : 'cajas-agricolas'}/${product.slug}`}
            className="flex-1 btn-primary text-center flex items-center justify-center space-x-2 group"
          >
            <span>Ver detalles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          
          <button className="px-3 py-2 border border-gray-ui text-gray-charcoal hover:bg-gray-ui transition-colors duration-200 rounded-lg">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
