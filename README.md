# JACS Plastics - Sitio Institucional

Sitio web institucional para JACS Plastics México, especializado en tarimas plásticas y cajas agrícolas de polipropileno reciclado.

## 🚀 Características

- **Next.js 14** con App Router
- **TypeScript** para type safety
- **TailwindCSS** + **shadcn/ui** para estilos
- **next-intl** para internacionalización (ES/EN)
- **Framer Motion** para animaciones
- **SEO técnico** completo
- **GA4** y **Meta Pixel** integrados
- **Responsive design** optimizado

## 🎨 Identidad Visual

### Paleta de Colores
- **Azul principal**: #0A4D8C
- **Azul profundo**: #083A6B
- **Gris carbón**: #1F2937
- **Gris UI**: #E5E7EB
- **Blanco**: #FFFFFF

### Tipografía
- **Títulos**: Rubik (semibold/bold)
- **Cuerpo**: Inter (regular/medium)

## 📦 Productos

### Tarimas Plásticas
- **JS-01**: 48" × 40", carga estática 3,000 kg
- **JS-15**: 1.20m × 1.00m, carga estática 1,000 kg
- **JS-32**: 1.20m × 1.00m, carga estática 5,000 kg

### Cajas Agrícolas
- **Caja Allende**: 30 kg, ventilación ideal, apilable

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── productos/
│   │   ├── empresa/
│   │   ├── contacto/
│   │   ├── tarimas-plasticas/
│   │   └── cajas-agricolas/
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── SiteHeader.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Analytics.tsx
│   └── JsonLd.tsx
├── data/
│   ├── pallets.ts
│   └── boxes.ts
├── messages/
│   ├── es.json
│   └── en.json
└── public/
    └── images/
```

## 🌐 Internacionalización

El sitio soporta español (ES) e inglés (EN) con:
- Selector de idioma en el header
- URLs localizadas (`/es/`, `/en/`)
- Metadatos SEO por idioma
- Hreflang automático

## 🔍 SEO

- **Metadatos dinámicos** por página
- **Open Graph** y **Twitter Cards**
- **Sitemap.xml** automático
- **Robots.txt** configurado
- **JSON-LD** estructurado
- **Canonical URLs**
- **Hreflang** para idiomas

## 📊 Analytics

- **Google Analytics 4** integrado
- **Meta Pixel** para Facebook Ads
- Tracking de conversiones
- Eventos personalizados

## 🎯 Landing Pages para Ads

- `/tarimas-plasticas` - Landing para tarimas
- `/cajas-agricolas` - Landing para cajas agrícolas

Ambas incluyen:
- Formulario de cotización above-the-fold
- Tabla comparativa de productos
- CTAs optimizados para conversión

## 📱 Responsive Design

- **Mobile-first** approach
- Breakpoints optimizados
- Navegación móvil con hamburger menu
- Imágenes responsive con Next.js Image

## ⚡ Performance

- **LCP < 2.5s** objetivo
- **Preload** de recursos críticos
- **next/font** para tipografías
- **Compresión Brotli**
- **Cache headers** optimizados

## 🔧 Scripts Disponibles

```bash
npm run dev      # Desarrollo
npm run build    # Construcción
npm run start    # Producción
npm run lint     # Linting
npm run typecheck # Type checking
```

## 📞 Contacto

- **Email**: ventas@jacs.mx
- **CDMX**: (55) 7583 8165
- **Monterrey**: (81) 2527 4019
- **Web**: www.jacsplastics.mx

## 📄 Licencia

Todos los derechos reservados © 2024 JACS Plastics
