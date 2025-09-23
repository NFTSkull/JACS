import SiteHeader from '@/components/SiteHeader';
import Hero from '@/components/Hero';
import BenefitsSection from '@/components/BenefitsSection';
import IndustriesSection from '@/components/IndustriesSection';
import ProductCard from '@/components/ProductCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { pallets } from '@/data/pallets';
import { boxes } from '@/data/boxes';

export default function HomePage() {
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
                Productos Destacados
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {pallets.map((pallet) => (
                <ProductCard
                  key={pallet.id}
                  product={pallet}
                  type="pallet"
                  locale="es"
                />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {boxes.map((box) => (
                <ProductCard
                  key={box.id}
                  product={box}
                  type="box"
                  locale="es"
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