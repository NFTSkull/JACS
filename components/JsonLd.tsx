import { pallets } from '@/data/pallets';
import { boxes } from '@/data/boxes';

export function OrganizationJsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JACS Plastics",
    "url": "https://www.jacsplastics.mx",
    "logo": "https://www.jacsplastics.mx/logo.png",
    "description": "Fabricante de tarimas plásticas y cajas agrícolas en polipropileno reciclado",
    "foundingDate": "2010",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Av. Insurgentes Sur 1234",
        "addressLocality": "Ciudad de México",
        "addressCountry": "MX",
        "postalCode": "03100"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Av. Constitución 5678",
        "addressLocality": "Monterrey",
        "addressRegion": "Nuevo León",
        "addressCountry": "MX",
        "postalCode": "64000"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+52-55-7583-8165",
        "contactType": "sales",
        "areaServed": "MX",
        "availableLanguage": ["Spanish", "English"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+52-81-2527-4019",
        "contactType": "sales",
        "areaServed": "MX",
        "availableLanguage": ["Spanish", "English"]
      }
    ],
    "email": "ventas@jacs.mx",
    "sameAs": [
      "https://www.jacsplastics.mx"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}

export function ProductJsonLd({ product, type }: { product: any; type: 'pallet' | 'box' }) {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.nombre,
    "description": product.descripcion,
    "image": `https://www.jacsplastics.mx${product.imagen}`,
    "brand": {
      "@type": "Brand",
      "name": "JACS Plastics"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "JACS Plastics"
    },
    "material": product.material,
    "weight": {
      "@type": "QuantitativeValue",
      "value": product.peso_kg,
      "unitCode": "KGM"
    },
    "additionalProperty": type === 'pallet' ? [
      {
        "@type": "PropertyValue",
        "name": "Carga Estática",
        "value": product.cargas.estatica_kg,
        "unitCode": "KGM"
      },
      {
        "@type": "PropertyValue",
        "name": "Carga Dinámica",
        "value": product.cargas.dinamica_kg,
        "unitCode": "KGM"
      },
      {
        "@type": "PropertyValue",
        "name": "Carga Rack",
        "value": product.cargas.rack_kg || 0,
        "unitCode": "KGM"
      },
      {
        "@type": "PropertyValue",
        "name": "Dimensiones",
        "value": product.dimensiones.ancho && product.dimensiones.largo
          ? `${product.dimensiones.ancho} × ${product.dimensiones.largo}`
          : `${product.dimensiones.ancho_cm} × ${product.dimensiones.largo_cm} cm`
      }
    ] : [
      {
        "@type": "PropertyValue",
        "name": "Capacidad",
        "value": product.capacidad_kg,
        "unitCode": "KGM"
      },
      {
        "@type": "PropertyValue",
        "name": "Apilable",
        "value": product.apilable ? "Sí" : "No"
      },
      {
        "@type": "PropertyValue",
        "name": "Dimensiones Exteriores",
        "value": `${product.dimensiones_exteriores_cm.largo} × ${product.dimensiones_exteriores_cm.ancho} × ${product.dimensiones_exteriores_cm.alto} cm`
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; url: string }> }) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.jacsplastics.mx${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}

export function FAQJsonLd({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
