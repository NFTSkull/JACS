import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import { boxes } from '@/data/boxes';

export default function CajasAgricolasPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-charcoal mb-4">
              Cajas Agrícolas
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cajas plásticas con ventilación ideal para conservar frescura; apilables, 
              de alta resistencia y personalizables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boxes.map((box) => (
              <div key={box.id} className="card">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-charcoal mb-4">
                    {box.nombre}
                  </h3>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="font-medium">Capacidad:</span>
                      <span>{box.capacidad_kg} kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Apilable:</span>
                      <span>{box.apilable ? 'Sí' : 'No'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Dimensiones:</span>
                      <span>{box.dimensiones_exteriores_cm.largo} × {box.dimensiones_exteriores_cm.ancho} × {box.dimensiones_exteriores_cm.alto} cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Peso:</span>
                      <span>{box.peso_kg} kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Material:</span>
                      <span>{box.material}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-6">
                    {box.descripcion}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-charcoal mb-2">Personalización:</h4>
                    <ul className="text-sm text-gray-600">
                      {box.personalizacion.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <button className="btn-primary w-full">
                    Solicitar Cotización
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
