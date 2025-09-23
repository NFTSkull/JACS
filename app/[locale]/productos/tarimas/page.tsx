import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import SiteHeader from '@/components/SiteHeader';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { pallets } from '@/data/pallets';
import { Metadata } from 'next';

interface PalletsPageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PalletsPageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'products.pallets' });
  
  return {
    title: 'Tarimas de Plástico - JACS Plastics',
    description: t('intro'),
    keywords: 'tarimas plásticas, polipropileno reciclado, logística, exportación, sanitizable',
    openGraph: {
      title: 'Tarimas de Plástico - JACS Plastics',
      description: t('intro'),
      type: 'website',
      locale: locale,
      url: `https://www.jacsplastics.mx/${locale}/productos/tarimas`,
    },
    alternates: {
      canonical: `https://www.jacsplastics.mx/${locale}/productos/tarimas`,
      languages: {
        'es': 'https://www.jacsplastics.mx/es/productos/tarimas',
        'en': 'https://www.jacsplastics.mx/en/productos/tarimas',
      },
    },
  };
}

export default function PalletsPage({ params: { locale } }: PalletsPageProps) {
  const t = useTranslations('products.pallets');

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
        <section className="py-16 bg-gray-ui">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-charcoal mb-4">
                Comparativa de Tarimas
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
                    <th className="px-6 py-4 text-left font-semibold">Uso Recomendado</th>
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
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {pallet.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
