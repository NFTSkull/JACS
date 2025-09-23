import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import { pallets } from '@/data/pallets';

export default function TarimasPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-charcoal mb-4">
              Tarimas de Plástico
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tarimas plásticas en polipropileno reciclado: sanitizables, sin clavos ni astillas, 
              sin absorción de humedad u olores; ideales para logística y exportación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pallets.map((pallet) => (
              <div key={pallet.id} className="card">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-charcoal mb-4">
                    {pallet.nombre}
                  </h3>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="font-medium">Dimensiones:</span>
                      <span>{pallet.dimensiones.ancho || `${pallet.dimensiones.ancho_cm}cm`} × {pallet.dimensiones.largo || `${pallet.dimensiones.largo_cm}cm`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Carga Estática:</span>
                      <span>{pallet.cargas.estatica_kg} kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Carga Dinámica:</span>
                      <span>{pallet.cargas.dinamica_kg} kg</span>
                    </div>
                    {pallet.cargas.rack_kg && (
                      <div className="flex justify-between">
                        <span className="font-medium">Carga Rack:</span>
                        <span>{pallet.cargas.rack_kg} kg</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="font-medium">Peso:</span>
                      <span>{pallet.peso_kg} kg</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-6">
                    {pallet.descripcion}
                  </p>

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
