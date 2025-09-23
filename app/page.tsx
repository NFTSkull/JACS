export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>
              JACS <span style={{ color: 'var(--gray-charcoal)' }}>Plastics</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-blue-600">Inicio</a>
              <a href="/productos" className="text-gray-600 hover:text-blue-600">Productos</a>
              <a href="/contacto" className="text-gray-600 hover:text-blue-600">Contacto</a>
            </nav>
            <button className="btn-primary">Cotiza ahora</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(10, 77, 140, 0.85), rgba(8, 58, 107, 0.85))' }}>
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tarimas y Cajas de Plástico de Clase Mundial
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Soluciones higiénicas, durables y listas para exportación
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">Explorar Tarimas</button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Ver Cajas Agrícolas
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16" style={{ backgroundColor: 'var(--gray-ui)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--gray-charcoal)' }}>
            Beneficios de Nuestros Productos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'Higiene', desc: 'Fácil de lavar y sanitizar, sin absorción de humedad u olores' },
              { title: 'Durabilidad', desc: 'Resistente al desgaste y condiciones adversas' },
              { title: 'Peso Constante', desc: 'Peso uniforme sin variaciones por humedad' },
              { title: 'Resistencia a Químicos', desc: 'Compatible con productos químicos y sanitizantes' },
              { title: 'Reciclables', desc: 'Material reciclado, amigable con el medio ambiente' }
            ].map((benefit, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4" style={{ backgroundColor: 'rgba(10, 77, 140, 0.1)' }}>
                  <div className="w-full h-full flex items-center justify-center text-2xl">🛡️</div>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--gray-charcoal)' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--gray-charcoal)' }}>
            Productos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Tarima JS-01', specs: '48" × 40" • 3,000 kg • 9.7 kg' },
              { name: 'Tarima JS-15', specs: '1.20m × 1.00m • 1,000 kg • 6.7 kg' },
              { name: 'Tarima JS-32', specs: '1.20m × 1.00m • 5,000 kg • 14 kg' },
              { name: 'Caja Allende', specs: '54×35×32 cm • 30 kg • 2.0 kg' }
            ].map((product, index) => (
              <div key={index} className="card">
                <div className="h-48 mb-4 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--gray-ui)' }}>
                  <span className="text-gray-500 font-medium">Imagen del producto</span>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--gray-charcoal)' }}>
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{product.specs}</p>
                <button className="btn-primary w-full">Ver detalles</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16" style={{ backgroundColor: 'var(--gray-ui)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: 'var(--gray-charcoal)' }}>
              Solicita tu Cotización
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Nombre *" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Empresa *" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="email" placeholder="Email *" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                <input type="tel" placeholder="Teléfono *" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <textarea rows={4} placeholder="Mensaje *" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
              <button type="submit" className="btn-primary w-full text-lg py-4">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--gray-charcoal)' }} className="text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                JACS <span style={{ color: 'var(--primary)' }}>Plastics</span>
              </div>
              <p className="text-gray-300 text-sm">
                Líder en fabricación de tarimas y cajas de plástico de alta calidad.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Productos</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white">Tarimas de Plástico</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Cajas Agrícolas</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>CDMX: (55) 7583 8165</div>
                <div>MTY: (81) 2527 4019</div>
                <div>ventas@jacs.mx</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Sucursales</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>
                  <strong>CDMX</strong><br />
                  Av. Insurgentes Sur 1234
                </div>
                <div>
                  <strong>Monterrey</strong><br />
                  Av. Constitución 5678
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2024 JACS Plastics. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}