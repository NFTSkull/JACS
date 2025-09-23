import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import { Target, Eye, Heart, MapPin, Phone } from 'lucide-react';
import { Metadata } from 'next';

interface CompanyPageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: CompanyPageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'company' });
  
  return {
    title: 'Empresa - JACS Plastics',
    description: 'Conoce la historia, misión, visión y valores de JACS Plastics. Líderes en soluciones plásticas para la industria.',
    keywords: 'empresa, historia, misión, visión, valores, JACS Plastics, industria plástica',
    openGraph: {
      title: 'Empresa - JACS Plastics',
      description: 'Conoce la historia, misión, visión y valores de JACS Plastics.',
      type: 'website',
      locale: locale,
      url: `https://www.jacsplastics.mx/${locale}/empresa`,
    },
    alternates: {
      canonical: `https://www.jacsplastics.mx/${locale}/empresa`,
      languages: {
        'es': 'https://www.jacsplastics.mx/es/empresa',
        'en': 'https://www.jacsplastics.mx/en/empresa',
      },
    },
  };
}

export default function CompanyPage({ params: { locale } }: CompanyPageProps) {
  const t = useTranslations('company');

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
              Más de una década de experiencia en soluciones plásticas para la industria
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* History Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-charcoal mb-6">
                  {t('history')}
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    JACS Plastics nació con la visión de revolucionar la industria del plástico en México, 
                    ofreciendo soluciones innovadoras y sostenibles para empresas que buscan alternativas 
                    más eficientes y amigables con el medio ambiente.
                  </p>
                  <p>
                    Desde nuestros inicios, nos hemos especializado en la fabricación de tarimas plásticas 
                    y cajas agrícolas de alta calidad, utilizando materiales reciclados y procesos de 
                    producción que respetan el medio ambiente.
                  </p>
                  <p>
                    Hoy en día, somos reconocidos como líderes en el sector, atendiendo a empresas de 
                    diversos sectores industriales en México y contribuyendo al crecimiento sostenible 
                    de la economía nacional.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gray-ui rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl font-bold text-primary mb-2">10+</div>
                    <div className="text-lg">Años de experiencia</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission, Vision, Values */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-charcoal mb-4">
                  {t('mission')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Proporcionar soluciones plásticas innovadoras y sostenibles que mejoren la eficiencia 
                  operativa de nuestros clientes, contribuyendo al desarrollo de una industria más 
                  responsable con el medio ambiente.
                </p>
              </div>

              {/* Vision */}
              <div className="card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-charcoal mb-4">
                  {t('vision')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser la empresa líder en México en la fabricación de soluciones plásticas sostenibles, 
                  reconocida por nuestra innovación, calidad y compromiso con el medio ambiente.
                </p>
              </div>

              {/* Values */}
              <div className="card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-charcoal mb-4">
                  {t('values')}
                </h3>
                <div className="text-gray-600 leading-relaxed space-y-2">
                  <p><strong>Sostenibilidad:</strong> Compromiso con el medio ambiente</p>
                  <p><strong>Calidad:</strong> Productos de excelencia</p>
                  <p><strong>Innovación:</strong> Soluciones tecnológicas avanzadas</p>
                  <p><strong>Servicio:</strong> Atención personalizada</p>
                </div>
              </div>
            </div>
          </section>

          {/* Branches Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-charcoal mb-4">
                {t('branches')}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Contamos con presencia estratégica en las principales ciudades industriales de México
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CDMX Branch */}
              <div className="card">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-charcoal mb-3">
                      Ciudad de México
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p>Av. Insurgentes Sur 1234</p>
                      <p>Col. Del Valle, Ciudad de México</p>
                      <p>C.P. 03100</p>
                      <div className="flex items-center space-x-2 mt-3">
                        <Phone className="w-4 h-4" />
                        <span>(55) 7583 8165</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monterrey Branch */}
              <div className="card">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-charcoal mb-3">
                      Monterrey
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p>Av. Constitución 5678</p>
                      <p>Col. Centro, Monterrey, NL</p>
                      <p>C.P. 64000</p>
                      <div className="flex items-center space-x-2 mt-3">
                        <Phone className="w-4 h-4" />
                        <span>(81) 2527 4019</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
