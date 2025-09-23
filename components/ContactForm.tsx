'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  company: z.string().min(2, 'La empresa debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'El teléfono debe tener al menos 10 dígitos'),
  product: z.string().min(1, 'Selecciona un producto'),
  volume: z.string().min(1, 'Especifica el volumen'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  honeypot: z.string().max(0, 'Bot detected'), // Honeypot field
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = useTranslations('contact.form');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form data:', data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card text-center py-12"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-gray-charcoal mb-2">
          ¡Mensaje enviado!
        </h3>
        <p className="text-gray-600 mb-6">
          Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-primary"
        >
          Enviar otro mensaje
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="card"
    >
      <h3 className="text-2xl font-semibold text-gray-charcoal mb-6">
        {t('title')}
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot field - hidden */}
        <input
          type="text"
          {...register('honeypot')}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-charcoal mb-2">
              {t('name')} *
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className="w-full px-4 py-3 border border-gray-ui rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
              placeholder="Tu nombre completo"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-charcoal mb-2">
              {t('company')} *
            </label>
            <input
              type="text"
              id="company"
              {...register('company')}
              className="w-full px-4 py-3 border border-gray-ui rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
              placeholder="Nombre de tu empresa"
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-charcoal mb-2">
              {t('email')} *
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="w-full px-4 py-3 border border-gray-ui rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
              placeholder="tu@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-charcoal mb-2">
              {t('phone')} *
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className="w-full px-4 py-3 border border-gray-ui rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
              placeholder="(55) 1234 5678"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="product" className="block text-sm font-medium text-gray-charcoal mb-2">
              {t('product')} *
            </label>
            <select
              id="product"
              {...register('product')}
              className="w-full px-4 py-3 border border-gray-ui rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
            >
              <option value="">Selecciona un producto</option>
              <option value="tarima-js-01">Tarima JS-01</option>
              <option value="tarima-js-15">Tarima JS-15</option>
              <option value="tarima-js-32">Tarima JS-32</option>
              <option value="caja-allende">Caja Allende</option>
              <option value="otros">Otros productos</option>
            </select>
            {errors.product && (
              <p className="mt-1 text-sm text-red-500">{errors.product.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="volume" className="block text-sm font-medium text-gray-charcoal mb-2">
              {t('volume')} *
            </label>
            <input
              type="text"
              id="volume"
              {...register('volume')}
              className="w-full px-4 py-3 border border-gray-ui rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
              placeholder="Ej: 100 unidades/mes"
            />
            {errors.volume && (
              <p className="mt-1 text-sm text-red-500">{errors.volume.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-charcoal mb-2">
            {t('message')} *
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message')}
            className="w-full px-4 py-3 border border-gray-ui rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-none"
            placeholder="Cuéntanos más sobre tus necesidades..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
          <span>{isSubmitting ? 'Enviando...' : t('submit')}</span>
        </button>
      </form>
    </motion.div>
  );
}
