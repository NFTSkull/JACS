import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import SiteHeader from '@/components/SiteHeader';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { boxes } from '@/data/boxes';
import { Metadata } from 'next';

interface BoxesPageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: BoxesPageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'products.boxes' });
  
  return {
    title: 'Cajas Agrícolas - JACS Plastics',
    description: t('intro'),
    keywords: 'cajas agrícolas, ventilación, apilable, polipropileno, personalización',
    openGraph: {
      title: 'Cajas Agrícolas - JACS Plastics',
      description: t('intro'),
      type: 'website',
      locale: locale,
      url: `https://www.jacsplastics.mx/${locale}/productos/cajas-agricolas`,
    },
    alternates: {
      canonical: `https://www.jacsplastics.mx/${locale}/productos/cajas-agricolas`,
      languages: {
        'es': 'https://www.jacsplastics.mx/es/productos/cajas-agricolas',
        'en': 'https://www.jacsplastics.mx/en/productos/cajas-agricolas',
      },
    },
  };
}

export default function BoxesPage({ params: { locale } }: BoxesPageProps) {
  const t = useTranslations('products.boxes');

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
              {t('intro')}
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <section className="py-16 bg-gray-ui">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-charcoal mb-4">
                Características de Nuestras Cajas Agrícolas
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
      </main>

      <Footer />
    </div>
  );
}
