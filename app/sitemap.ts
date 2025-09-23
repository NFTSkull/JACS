import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.jacsplastics.mx'
  
  const staticPages = [
    '',
    '/productos/tarimas',
    '/productos/cajas-agricolas',
    '/contacto',
  ]

  const sitemap: MetadataRoute.Sitemap = staticPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : 'weekly',
    priority: page === '' ? 1 : 0.8,
  }))

  return sitemap
}
