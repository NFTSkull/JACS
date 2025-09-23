import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import SiteHeader from '@/components/SiteHeader';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Metadata } from 'next';

interface ContactPageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: ContactPageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'contact' });
  
  return {
    title: 'Contacto - JACS Plastics',
    description: 'Contáctanos para cotizar tarimas plásticas y cajas agrícolas. Estamos en CDMX y Monterrey.',
    keywords: 'contacto, cotización, tarimas plásticas, cajas agrícolas, CDMX, Monterrey',
    openGraph: {
      title: 'Contacto - JACS Plastics',
      description: 'Contáctanos para cotizar tarimas plásticas y cajas agrícolas.',
      type: 'website',
      locale: locale,
      url: `https://www.jacsplastics.mx/${locale}/contacto`,
    },
    alternates: {
      canonical: `https://www.jacsplastics.mx/${locale}/contacto`,
      languages: {
        'es': 'https://www.jacsplastics.mx/es/contacto',
        'en': 'https://www.jacsplastics.mx/en/contacto',
      },
    },
  };
}

export default function ContactPage({ params: { locale } }: ContactPageProps) {
  const t = useTranslations('contact');

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Estamos aquí para ayudarte con tus necesidades de tarimas plásticas y cajas agrícolas
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-charcoal mb-6">
                  Información de Contacto
                </h2>
                
                <div className="space-y-6">
                  {/* Phone Numbers */}
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-charcoal mb-2">Teléfonos</h3>
                      <div className="space-y-1 text-gray-600">
                        <div>
                          <span className="font-medium">Ciudad de México:</span> {t('info.cdmx_phone')}
                        </div>
                        <div>
                          <span className="font-medium">Monterrey:</span> {t('info.mty_phone')}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-charcoal mb-2">Email</h3>
                      <a 
                        href={`mailto:${t('info.sales_email')}`}
                        className="text-primary hover:text-primary-dark transition-colors duration-200"
                      >
                        {t('info.sales_email')}
                      </a>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-charcoal mb-2">Sitio Web</h3>
                      <a 
                        href={`https://${t('info.website')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark transition-colors duration-200"
                      >
                        {t('info.website')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branches */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-charcoal mb-6">
                  Nuestras Sucursales
                </h2>
                
                <div className="space-y-6">
                  {/* CDMX Branch */}
                  <div className="card">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-charcoal mb-2">Ciudad de México</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Av. Insurgentes Sur 1234</p>
                          <p>Col. Del Valle, Ciudad de México</p>
                          <p>Tel: {t('info.cdmx_phone')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Monterrey Branch */}
                  <div className="card">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-charcoal mb-2">Monterrey</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Av. Constitución 5678</p>
                          <p>Col. Centro, Monterrey, NL</p>
                          <p>Tel: {t('info.mty_phone')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-charcoal mb-6">
                  Horarios de Atención
                </h2>
                
                <div className="card">
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Lunes - Viernes:</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábados:</span>
                      <span className="font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingos:</span>
                      <span className="font-medium">Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
