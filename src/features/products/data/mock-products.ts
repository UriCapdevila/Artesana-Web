import { PlaceHolderImages } from '@/shared/assets/placeholder-images';
import type { Product } from '../types/product.types';

/**
 * Mock product data — will be replaced by API calls in the future.
 * Follows the enriched Product type with categories, tags, multiple images.
 */
export const mockProducts: Product[] = [
  {
    id: 'prod-001',
    slug: 'cuaderno-cuero-aventura',
    name: "Cuaderno de Cuero 'Aventura'",
    description: 'Cuaderno de viaje con cubierta de cuero genuino, cosido a mano.',
    longDescription:
      'Un cuaderno que invita a la aventura. Cada página de papel reciclado de alta calidad espera tus relatos, bocetos y memorias. La cubierta de cuero genuino desarrollará una pátina única con el tiempo, haciéndolo verdaderamente tuyo.',
    price: 35,
    currency: 'EUR',
    category: 'notebook',
    tags: ['cuero', 'viaje', 'cosido a mano', 'escritura'],
    images: [
      {
        url: PlaceHolderImages.find((p) => p.id === 'product-notebook-leather')?.imageUrl ?? '',
        alt: "Cuaderno de Cuero 'Aventura'",
        hint: PlaceHolderImages.find((p) => p.id === 'product-notebook-leather')?.imageHint ?? 'leather notebook',
        isPrimary: true,
      },
    ],
    stock: 10,
    isAvailable: true,
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-06-01T00:00:00Z',
  },
  {
    id: 'prod-002',
    slug: 'bordado-floral-primavera',
    name: "Bordado Floral 'Primavera'",
    description: 'Delicado bordado de flores silvestres en un bastidor de bambú.',
    longDescription:
      'Un bordado artesanal que captura la esencia de la primavera. Flores silvestres cuidadosamente bordadas a mano sobre lino natural, enmarcadas en un bastidor de bambú sostenible, listo para colgar.',
    price: 50,
    currency: 'EUR',
    category: 'embroidery',
    tags: ['bordado', 'flores', 'bambú', 'decoración'],
    images: [
      {
        url: PlaceHolderImages.find((p) => p.id === 'product-embroidery-hoop')?.imageUrl ?? '',
        alt: "Bordado Floral 'Primavera'",
        hint: PlaceHolderImages.find((p) => p.id === 'product-embroidery-hoop')?.imageHint ?? 'embroidery hoop',
        isPrimary: true,
      },
    ],
    stock: 5,
    isAvailable: true,
    createdAt: '2024-02-10T00:00:00Z',
    updatedAt: '2024-06-01T00:00:00Z',
  },
  {
    id: 'prod-003',
    slug: 'diario-tela-jardin-secreto',
    name: "Diario con Tela 'Jardín Secreto'",
    description: 'Elegante diario forrado en tela con motivos botánicos.',
    longDescription:
      'Sumérgete en un jardín secreto de creatividad. Este diario, forrado en una exquisita tela con estampado botánico, combina la elegancia visual con el placer táctil de sus páginas de papel marfil.',
    price: 28,
    currency: 'EUR',
    category: 'notebook',
    tags: ['tela', 'botánico', 'diario', 'elegante'],
    images: [
      {
        url: PlaceHolderImages.find((p) => p.id === 'product-notebook-fabric')?.imageUrl ?? '',
        alt: "Diario con Tela 'Jardín Secreto'",
        hint: PlaceHolderImages.find((p) => p.id === 'product-notebook-fabric')?.imageHint ?? 'fabric notebook',
        isPrimary: true,
      },
    ],
    stock: 15,
    isAvailable: true,
    createdAt: '2024-03-05T00:00:00Z',
    updatedAt: '2024-06-01T00:00:00Z',
  },
  {
    id: 'prod-004',
    slug: 'kit-bordado-primer-ramo',
    name: "Kit de Bordado 'Mi Primer Ramo'",
    description: 'Todo lo que necesitas para empezar a bordar: hilos, tela, aguja y bastidor.',
    longDescription:
      'El kit perfecto para principiantes y entusiastas del bordado. Incluye bastidor de bambú, tela de lino pre-marcada con el diseño, hilos DMC de colores, agujas y una guía paso a paso ilustrada.',
    price: 42,
    currency: 'EUR',
    category: 'kit',
    tags: ['kit', 'bordado', 'principiante', 'regalo'],
    images: [
      {
        url: PlaceHolderImages.find((p) => p.id === 'product-embroidery-kit')?.imageUrl ?? '',
        alt: "Kit de Bordado 'Mi Primer Ramo'",
        hint: PlaceHolderImages.find((p) => p.id === 'product-embroidery-kit')?.imageHint ?? 'embroidery kit',
        isPrimary: true,
      },
    ],
    stock: 20,
    isAvailable: true,
    createdAt: '2024-04-20T00:00:00Z',
    updatedAt: '2024-06-01T00:00:00Z',
  },
];
