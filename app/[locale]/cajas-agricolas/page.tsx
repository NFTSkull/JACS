import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import SiteHeader from '@/components/SiteHeader';
import ProductCard from '@/components/ProductCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { OrganizationJsonLd, ProductJsonLd } from '@/components/JsonLd';
import { boxes } from '@/data/boxes';
import { Metadata } from 'next';

interface CajasLandingProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: CajasLandingProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'products.boxes' });
  
  return {
    title: 'Cajas Agrícolas Allende - Ventilación Ideal | JACS Plastics',
    description: 'Cajas agrícolas con ventilación ideal para conservar frescura. Apilables, personalizables y de alta resistencia. Cotiza ahora.',
    keywords: 'cajas agrícolas, ventilación, apilable, personalización, Allende, polipropileno',
    openGraph: {
      title: 'Cajas Agrícolas - Ventilación Ideal | JACS Plastics',
      description: 'Cajas agrícolas con ventilación ideal para conservar frescura. Apilables y personalizables.',
      type: 'website',
      locale: locale,
      url: `https://www.jacsplastics.mx/${locale}/cajas-agricolas`,
    },
    alternates: {
      canonical: `https://www.jacsplastics.mx/${locale}/cajas-agricolas`,
      languages: {
        'es': 'https://www.jacsplastics.mx/es/cajas-agricolas',
        'en': 'https://www.jacsplastics.mx/en/cajas-agricolas',
      },
    },
  };
}

export default function CajasLandingPage({ params: { locale } }: CajasLandingProps) {
  const t = useTranslations('products.boxes');

  return (
    <div className="min-h-screen bg-white">
      <OrganizationJsonLd />
      {boxes.map(box => (
        <ProductJsonLd key={box.id} product={box} type="box" />
      ))}
      
      <SiteHeader />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cajas Agrícolas con Ventilación Ideal
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              {t('intro')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#cotizar" className="btn-primary text-lg px-8 py-4">
                Cotizar Ahora
              </a>
              <a href="#productos" className="btn-ghost text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary">
                Ver Productos
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-charcoal mb-4">
                Ventajas de nuestras cajas agrícolas
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 9h6m-6 4h6m-6 4h6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-charcoal mb-2">
                  Ventilación Ideal
                </h3>
                <p className="text-gray-600 text-sm">
                  Diseño optimizado para mantener la frescura de productos agrícolas
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-charcoal mb-2">
                  Apilables
                </h3>
                <p className="text-gray-600 text-sm">
                  Optimizan el espacio de almacenamiento y transporte
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-charcoal mb-2">
                  Personalización
                </h3>
                <p className="text-gray-600 text-sm">
                  Logotipo en alto relieve o hot stamping disponible
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-charcoal mb-2">
                  Alta Resistencia
                </h3>
                <p className="text-gray-600 text-sm">
                  Material PP reciclado de máxima durabilidad
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="productos" className="py-16 bg-gray-ui">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-charcoal mb-4">
                Nuestras Cajas Agrícolas
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boxes.map((box) => (
                <ProductCard
                  key={box.id}
                  product={box}
                  type="box"
                  locale={locale}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-charcoal mb-4">
                Características Técnicas
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-charcoal mb-6">
                  Especificaciones de la Caja Allende
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-ui">
                    <span className="font-medium text-gray-charcoal">Capacidad:</span>
                    <span className="text-gray-600">30 kg</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-ui">
                    <span className="font-medium text-gray-charcoal">Dimensiones:</span>
                    <span className="text-gray-600">54 × 35 × 32 cm</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-ui">
                    <span className="font-medium text-gray-charcoal">Peso:</span>
                    <span className="text-gray-600">2.0 kg</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-ui">
                    <span className="font-medium text-gray-charcoal">Material:</span>
                    <span className="text-gray-600">Polipropileno reciclado</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-ui">
                    <span className="font-medium text-gray-charcoal">Apilable:</span>
                    <span className="text-gray-600">Sí</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="card">
                  <h4 className="font-semibold text-gray-charcoal mb-3">Ventajas Principales</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>No absorbe humedad ni olores</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Sin clavos ni astillas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Amigable con el medio ambiente</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Fácil de lavar y sanitizar</span>
                    </li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold text-gray-charcoal mb-3">Personalización</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Logotipo en alto relieve</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Hot stamping</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="cotizar" className="py-16 bg-gray-ui">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-charcoal mb-4">
                Solicita tu Cotización
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
