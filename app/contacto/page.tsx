import SiteHeader from '@/components/SiteHeader';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-charcoal mb-4">
              Contacto
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contáctanos para solicitar una cotización personalizada de nuestros productos
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
