# Guía de Despliegue - JACS Plastics

## 🚀 Despliegue en Vercel (Recomendado)

### 1. Preparación
```bash
# Instalar dependencias
npm install

# Verificar que todo funciona
npm run lint
npm run typecheck
npm run build
```

### 2. Configurar Variables de Entorno
En el dashboard de Vercel, agregar:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://www.jacsplastics.mx
```

### 3. Despliegue
```bash
# Conectar repositorio a Vercel
vercel --prod

# O usar GitHub integration
# 1. Conectar repo en Vercel dashboard
# 2. Configurar variables de entorno
# 3. Deploy automático en cada push
```

## 🌐 Configuración de Dominio

### 1. DNS
Configurar registros DNS:
```
A     @       76.76.19.61
CNAME www     cname.vercel-dns.com
```

### 2. SSL
Vercel maneja SSL automáticamente.

## 📊 Configuración de Analytics

### Google Analytics 4
1. Crear propiedad GA4
2. Obtener Measurement ID (G-XXXXXXXXXX)
3. Agregar a variables de entorno
4. Verificar en GA4 dashboard

### Meta Pixel
1. Crear Pixel en Facebook Business Manager
2. Obtener Pixel ID
3. Agregar a variables de entorno
4. Verificar en Facebook Events Manager

## 🖼️ Imágenes

### Imágenes Requeridas
Subir a `/public/images/`:
- `hero-bg.webp` - Fondo del hero (1920x1080px)
- `logo.svg` - Logo de JACS Plastics
- `favicon.ico` - Favicon (32x32px)

### Imágenes de Productos
Subir a `/public/products/`:
- `pallets/js-01.webp`
- `pallets/js-15.webp`
- `pallets/js-32.webp`
- `boxes/allende-30kg.webp`

## 🔧 Optimizaciones Post-Despliegue

### 1. Performance
- Verificar Core Web Vitals
- Optimizar imágenes si es necesario
- Configurar CDN si se requiere

### 2. SEO
- Verificar sitemap.xml
- Probar robots.txt
- Validar JSON-LD en Google Rich Results Test

### 3. Analytics
- Configurar goals en GA4
- Configurar eventos de conversión
- Verificar tracking en Meta Pixel

## 📱 Testing

### 1. Responsive
- Probar en móvil, tablet y desktop
- Verificar navegación móvil
- Probar formularios

### 2. SEO
- Google PageSpeed Insights
- Google Rich Results Test
- Screaming Frog SEO Spider

### 3. Analytics
- Google Tag Assistant
- Facebook Pixel Helper
- Verificar eventos de conversión

## 🚨 Troubleshooting

### Errores Comunes
1. **Build fails**: Verificar variables de entorno
2. **Images not loading**: Verificar rutas en `/public/`
3. **Analytics not working**: Verificar IDs en variables de entorno
4. **i18n issues**: Verificar archivos en `/messages/`

### Logs
```bash
# Ver logs de Vercel
vercel logs

# Ver logs locales
npm run dev
```

## 📞 Soporte

Para problemas técnicos:
- Revisar logs de Vercel
- Verificar configuración de variables de entorno
- Probar en entorno local primero

## 🔄 Actualizaciones

### Contenido
- Editar archivos en `/data/` para productos
- Editar archivos en `/messages/` para textos
- Actualizar imágenes en `/public/`

### Código
- Hacer cambios en desarrollo local
- Probar con `npm run build`
- Hacer commit y push para deploy automático
