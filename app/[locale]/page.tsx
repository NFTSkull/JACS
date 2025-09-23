import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import SiteHeader from '@/components/SiteHeader';
import Hero from '@/components/Hero';
import BenefitsSection from '@/components/BenefitsSection';
import IndustriesSection from '@/components/IndustriesSection';
import ProductCard from '@/components/ProductCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { pallets, boxes } from '@/data/pallets';

interface HomePageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: HomePageProps) {
  const t = await getTranslations({ locale, namespace: 'hero' });
  
  return {
    title: 'JACS Plastics - Tarimas y Cajas de Plástico de Clase Mundial',
    description: 'Soluciones higiénicas, durables y listas para exportación. Tarimas plásticas y cajas agrícolas en polipropileno reciclado.',
    keywords: 'tarimas plásticas, cajas agrícolas, polipropileno, exportación, logística, México',
    openGraph: {
      title: 'JACS Plastics - Tarimas y Cajas de Plástico de Clase Mundial',
      description: 'Soluciones higiénicas, durables y listas para exportación.',
      type: 'website',
      locale: locale,
      url: `https://www.jacsplastics.mx/${locale}`,
      siteName: 'JACS Plastics',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'JACS Plastics - Tarimas y Cajas de Plástico de Clase Mundial',
      description: 'Soluciones higiénicas, durables y listas para exportación.',
    },
    alternates: {
      canonical: `https://www.jacsplastics.mx/${locale}`,
      languages: {
        'es': 'https://www.jacsplastics.mx/es',
        'en': 'https://www.jacsplastics.mx/en',
      },
    },
  };
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  const t = useTranslations('products');

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      
      <main>
        <Hero />
        
        <BenefitsSection />
        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-charcoal mb-4">
                {t('featured')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {pallets.map((pallet) => (
                <ProductCard
                  key={pallet.id}
                  product={pallet}
                  type="pallet"
                  locale={locale}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        <IndustriesSection />

        <section className="py-16 bg-gray-ui">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
