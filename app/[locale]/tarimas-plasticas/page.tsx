import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import SiteHeader from '@/components/SiteHeader';
import ProductCard from '@/components/ProductCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { OrganizationJsonLd, ProductJsonLd } from '@/components/JsonLd';
import { pallets } from '@/data/pallets';
import { Metadata } from 'next';

interface TarimasLandingProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: TarimasLandingProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'products.pallets' });
  
  return {
    title: 'Tarimas Plásticas JS-01, JS-15, JS-32 - Cotiza Ahora | JACS Plastics',
    description: 'Tarimas plásticas en polipropileno reciclado. Cargas hasta 5,000 kg. Sanitizables, sin clavos ni astillas. Cotiza sin compromiso.',
    keywords: 'tarimas plásticas, cotizar tarimas, polipropileno, JS-01, JS-15, JS-32, carga estática, rackeable',
    openGraph: {
      title: 'Tarimas Plásticas - Cotiza Ahora | JACS Plastics',
      description: 'Tarimas plásticas en polipropileno reciclado. Cargas hasta 5,000 kg. Cotiza sin compromiso.',
      type: 'website',
      locale: locale,
      url: `https://www.jacsplastics.mx/${locale}/tarimas-plasticas`,
    },
    alternates: {
      canonical: `https://www.jacsplastics.mx/${locale}/tarimas-plasticas`,
      languages: {
        'es': 'https://www.jacsplastics.mx/es/tarimas-plasticas',
        'en': 'https://www.jacsplastics.mx/en/tarimas-plasticas',
      },
    },
  };
}

export default function TarimasLandingPage({ params: { locale } }: TarimasLandingProps) {
  const t = useTranslations('products.pallets');

  return (
    <div className="min-h-screen bg-white">
      <OrganizationJsonLd />
      {pallets.map(pallet => (
        <ProductJsonLd key={pallet.id} product={pallet} type="pallet" />
      ))}
      
      <SiteHeader />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tarimas Plásticas de Clase Mundial
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
                ¿Por qué elegir nuestras tarimas plásticas?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-charcoal mb-2">
                  Higiénicas
                </h3>
                <p className="text-gray-600 text-sm">
                  Fácil de lavar y sanitizar, sin absorción de humedad u olores
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-charcoal mb-2">
                  Durables
                </h3>
                <p className="text-gray-600 text-sm">
                  Resistentes al desgaste y condiciones adversas
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-charcoal mb-2">
                  Peso Constante
                </h3>
                <p className="text-gray-600 text-sm">
                  Peso uniforme sin variaciones por humedad
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-charcoal mb-2">
                  Reciclables
                </h3>
                <p className="text-gray-600 text-sm">
                  Material reciclado, amigable con el medio ambiente
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
                Nuestros Modelos de Tarimas
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pallets.map((pallet) => (
                <ProductCard
                  key={pallet.id}
                  product={pallet}
                  type="pallet"
                  locale={locale}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-charcoal mb-4">
                Comparativa Técnica
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Modelo</th>
                    <th className="px-6 py-4 text-left font-semibold">Dimensiones</th>
                    <th className="px-6 py-4 text-left font-semibold">Carga Estática</th>
                    <th className="px-6 py-4 text-left font-semibold">Carga Dinámica</th>
                    <th className="px-6 py-4 text-left font-semibold">Carga Rack</th>
                    <th className="px-6 py-4 text-left font-semibold">Peso</th>
                  </tr>
                </thead>
                <tbody>
                  {pallets.map((pallet, index) => (
                    <tr key={pallet.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-medium text-gray-charcoal">
                        {pallet.nombre}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {pallet.dimensiones.ancho && pallet.dimensiones.largo
                          ? `${pallet.dimensiones.ancho} × ${pallet.dimensiones.largo}`
                          : `${pallet.dimensiones.ancho_cm} × ${pallet.dimensiones.largo_cm} cm`
                        }
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {pallet.cargas.estatica_kg.toLocaleString()} kg
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {pallet.cargas.dinamica_kg.toLocaleString()} kg
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {pallet.cargas.rack_kg ? `${pallet.cargas.rack_kg.toLocaleString()} kg` : 'N/A'}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {pallet.peso_kg} kg
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
