import { PlaceHolderImages } from './placeholder-images';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  imageHint: string;
};

const productImages = {
  notebookLeather: PlaceHolderImages.find(p => p.id === 'product-notebook-leather')!,
  embroideryHoop: PlaceHolderImages.find(p => p.id === 'product-embroidery-hoop')!,
  notebookFabric: PlaceHolderImages.find(p => p.id === 'product-notebook-fabric')!,
  embroideryKit: PlaceHolderImages.find(p => p.id === 'product-embroidery-kit')!,
};


export const products: Product[] = [
  {
    id: 1,
    name: "Cuaderno de Cuero 'Aventura'",
    description: "Cuaderno de viaje con cubierta de cuero genuino, cosido a mano.",
    price: 35,
    image: productImages.notebookLeather.imageUrl,
    imageHint: productImages.notebookLeather.imageHint,
  },
  {
    id: 2,
    name: "Bordado Floral 'Primavera'",
    description: "Delicado bordado de flores silvestres en un bastidor de bambú.",
    price: 50,
    image: productImages.embroideryHoop.imageUrl,
    imageHint: productImages.embroideryHoop.imageHint,
  },
  {
    id: 3,
    name: "Diario con Tela 'Jardín Secreto'",
    description: "Elegante diario forrado en tela con motivos botánicos.",
    price: 28,
    image: productImages.notebookFabric.imageUrl,
    imageHint: productImages.notebookFabric.imageHint,
  },
  {
    id: 4,
    name: "Kit de Bordado 'Mi Primer Ramo'",
    description: "Todo lo que necesitas para empezar a bordar: hilos, tela, aguja y bastidor.",
    price: 42,
    image: productImages.embroideryKit.imageUrl,
    imageHint: productImages.embroideryKit.imageHint,
  },
];
