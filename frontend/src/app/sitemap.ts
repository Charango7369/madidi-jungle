import { MetadataRoute } from 'next';
import { TOURS_DATA } from '../data/mockData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://madidijungle.com';

  const staticRoutes = [
    '',
    '/programas',
    '/precios',
    '/alojamiento',
    '/parque-madidi',
    '/comunidad',
    '/testimonios',
    '/faq',
  ];

  const languages = ['en', 'es', 'fr', 'de'];

  const entries: MetadataRoute.Sitemap = [];

  // Generate homepage & static section entries with alternates
  staticRoutes.forEach((route) => {
    entries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          languages.map((lang) => [lang, `${baseUrl}/${lang}${route}`])
        ),
      },
    });
  });

  // Generate tour detail URLs
  TOURS_DATA.forEach((tour) => {
    entries.push({
      url: `${baseUrl}/programas/${tour.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: tour.is_featured ? 0.9 : 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/en/tours/${tour.slug}`,
          es: `${baseUrl}/es/programas/${tour.slug}`,
          fr: `${baseUrl}/fr/circuits/${tour.slug}`,
          de: `${baseUrl}/de/touren/${tour.slug}`,
        },
      },
    });
  });

  return entries;
}
