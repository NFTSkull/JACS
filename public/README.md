# Directorio de imágenes públicas

Este directorio contiene todas las imágenes estáticas del sitio web.

## Estructura recomendada:

```
public/
├── images/
│   ├── hero-bg.webp          # Imagen de fondo del hero
│   ├── logo.svg             # Logo de JACS Plastics
│   └── favicon.ico          # Favicon
├── products/
│   ├── pallets/
│   │   ├── js-01.webp      # Tarima JS-01
│   │   ├── js-15.webp      # Tarima JS-15
│   │   └── js-32.webp      # Tarima JS-32
│   └── boxes/
│       └── allende-30kg.webp # Caja Allende
└── icons/
    └── (iconos adicionales)
```

## Especificaciones de imágenes:

- **Formato**: WebP para mejor compresión
- **Hero background**: 1920x1080px mínimo
- **Productos**: 800x600px recomendado
- **Logo**: SVG vectorial
- **Favicon**: 32x32px ICO

## Optimización:

- Usar `next/image` para lazy loading
- Implementar blur placeholder
- Configurar sizes responsive
- Comprimir imágenes antes de subir
