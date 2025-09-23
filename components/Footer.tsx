'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const contactT = useTranslations('contact.info');

  return (
    <footer className="bg-gray-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              JACS <span className="text-primary">Plastics</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Productos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/productos/tarimas" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Tarimas de Plástico
                </Link>
              </li>
              <li>
                <Link href="/productos/cajas-agricolas" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Cajas Agrícolas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <div className="text-gray-300">CDMX: {contactT('cdmx_phone')}</div>
                  <div className="text-gray-300">MTY: {contactT('mty_phone')}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href={`mailto:${contactT('sales_email')}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {contactT('sales_email')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href={`https://${contactT('website')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {contactT('website')}
                </a>
              </div>
            </div>
          </div>

          {/* Branches */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sucursales</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Ciudad de México</div>
                  <div className="text-gray-300">Av. Insurgentes Sur 1234<br />Col. Del Valle, CDMX</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Monterrey</div>
                  <div className="text-gray-300">Av. Constitución 5678<br />Col. Centro, Monterrey, NL</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 JACS Plastics. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
