'use client';

import { useState } from 'react';
import type { Product } from '@/features/products/types/product.types';
import { Button } from '@/components/ui/button';
import { Heart, Minus, Plus, ShoppingBag, Star } from 'lucide-react';
import { WhatsApp } from '@/shared/components/icons/WhatsApp';
import { useCartStore } from '@/features/cart/store/cart.store';
import { WHATSAPP_NUMBER } from '@/shared/lib/constants';

export default function ProductActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    openCart();
    setQuantity(1);
  };

  const whatsappMessage = `¡Hola! Estoy interesado/a en ${quantity} unidad(es) del producto "${product.name}".`;
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="flex flex-col space-y-8 p-4 sm:p-6 md:p-8">
      <div>
        <h1 className="font-headline text-fluid-4xl font-bold text-primary">{product.name}</h1>
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-1 text-accent">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <span className="text-fluid-sm text-muted-foreground ml-2">(12 reseñas)</span>
          </div>
        </div>
      </div>

      <p className="text-fluid-3xl font-semibold text-foreground">€{product.price}</p>

      <p className="text-fluid-lg text-muted-foreground leading-relaxed">
        {product.longDescription ?? product.description}
      </p>

      <div className="flex items-center gap-4">
        <p className="font-semibold text-fluid-sm">Cantidad:</p>
        <div className="flex items-center border rounded-md bg-card">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 text-muted-foreground hover:text-foreground"
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 1}
            aria-label="Disminuir cantidad"
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="w-12 text-center text-lg font-bold" aria-live="polite">
            {quantity}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 text-muted-foreground hover:text-foreground"
            onClick={() => handleQuantityChange(1)}
            aria-label="Aumentar cantidad"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="flex-1 text-lg" onClick={handleAddToCart}>
          <ShoppingBag className="mr-2 h-5 w-5" />
          Agregar al Carrito
        </Button>
        <Button asChild size="lg" variant="outline" className="flex-1 text-lg">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <WhatsApp className="mr-2" />
            Consultar por WhatsApp
          </a>
        </Button>
        <Button variant="outline" size="lg" className="px-4">
          <Heart />
          <span className="sr-only">Añadir a Favoritos</span>
        </Button>
      </div>
    </div>
  );
}
