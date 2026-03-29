'use client';

import Image from 'next/image';
import type { CartItem as CartItemType } from '../types/cart.types';
import { useCartStore } from '../store/cart.store';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const primaryImage = item.product.images.find((img) => img.isPrimary) ?? item.product.images[0];

  return (
    <div className="flex gap-4 py-4 border-b border-border last:border-0">
      {/* Product Image */}
      <div className="relative w-20 h-20 rounded-md overflow-hidden bg-muted flex-shrink-0">
        <Image
          src={primaryImage?.url ?? ''}
          alt={primaryImage?.alt ?? item.product.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h4 className="font-headline text-fluid-base font-semibold text-foreground truncate">
          {item.product.name}
        </h4>
        <p className="text-fluid-sm text-muted-foreground">€{item.product.price}</p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2 mt-2">
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
            aria-label="Disminuir cantidad"
          >
            <Minus className="w-3 h-3" />
          </Button>
          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
            aria-label="Aumentar cantidad"
          >
            <Plus className="w-3 h-3" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 ml-auto text-destructive hover:text-destructive"
            onClick={() => removeItem(item.product.id)}
            aria-label="Eliminar del carrito"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      {/* Line Total */}
      <div className="text-right flex-shrink-0">
        <p className="font-semibold text-foreground">
          €{(item.product.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
