'use client';

import { useState } from 'react';
import type { Product } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Heart, Minus, Plus, ShoppingCart, Star } from 'lucide-react';

export default function ProductActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount: number) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + amount));
  };

  return (
    <div className="space-y-6">
      <h1 className="font-headline text-4xl font-bold text-primary">{product.name}</h1>
      <div className="flex items-center gap-4">
        <p className="text-3xl font-bold text-foreground">€{product.price}</p>
        <div className="flex items-center gap-1 text-accent">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <span className="text-sm text-muted-foreground ml-2">(12 reseñas)</span>
        </div>
      </div>
      <p className="text-lg text-muted-foreground">{product.description}</p>
      
      <div className="flex items-center gap-4">
        <p className="font-semibold">Cantidad:</p>
        <div className="flex items-center border rounded-md">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10"
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 1}
            aria-label="Disminuir cantidad"
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="w-10 text-center font-bold" aria-live="polite">{quantity}</span>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10"
            onClick={() => handleQuantityChange(1)}
            aria-label="Aumentar cantidad"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="flex-1">
          <ShoppingCart className="mr-2" />
          Añadir al Carrito
        </Button>
        <Button variant="outline" size="lg">
          <Heart className="mr-2" />
          Añadir a Favoritos
        </Button>
      </div>
    </div>
  );
}
