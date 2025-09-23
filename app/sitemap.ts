import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.jacsplastics.mx'
  const locales = ['es', 'en']
  
  const staticPages = [
    '',
    '/productos/tarimas',
    '/productos/cajas-agricolas',
    '/industrias',
    '/empresa',
    '/certificaciones',
    '/blog',
    '/contacto',
    '/tarimas-plasticas',
    '/cajas-agricolas',
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Generate sitemap entries for each locale and page
  locales.forEach(locale => {
    staticPages.forEach(page => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: {
            es: `${baseUrl}/es${page}`,
            en: `${baseUrl}/en${page}`,
          },
        },
      })
    })
  })

  return sitemap
}
