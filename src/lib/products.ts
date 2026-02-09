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
  bracelet: PlaceHolderImages.find(p => p.id === 'product-bracelet')!,
  earrings: PlaceHolderImages.find(p => p.id === 'product-earrings')!,
  necklace: PlaceHolderImages.find(p => p.id === 'product-necklace')!,
  ring: PlaceHolderImages.find(p => p.id === 'product-ring')!,
};


export const products: Product[] = [
  {
    id: 1,
    name: "Brazalete de Cuero",
    description: "Cuero genuino con broche de metal tallado a mano.",
    price: 45,
    image: productImages.bracelet.imageUrl,
    imageHint: productImages.bracelet.imageHint,
  },
  {
    id: 2,
    name: "Aros de Plata Martillada",
    description: "Plata de ley 925 con un diseño único martillado a mano.",
    price: 60,
    image: productImages.earrings.imageUrl,
    imageHint: productImages.earrings.imageHint,
  },
  {
    id: 3,
    name: "Collar de Turquesa",
    description: "Elegante collar con piedras de turquesa natural y cadena de plata.",
    price: 85,
    image: productImages.necklace.imageUrl,
    imageHint: productImages.necklace.imageHint,
  },
  {
    id: 4,
    name: "Anillo de Ópalo",
    description: "Anillo de plata con una brillante piedra de ópalo en el centro.",
    price: 75,
    image: productImages.ring.imageUrl,
    imageHint: productImages.ring.imageHint,
  },
];
