'use client';

import { useCartStore, selectTotalItems, selectTotalPrice, selectIsEmpty } from '../store/cart.store';
import { cartService } from '../services/cart.service';
import CartItem from './CartItem';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ShoppingBag, Trash2 } from 'lucide-react';
import { WhatsApp } from '@/shared/components/icons/WhatsApp';

export default function CartDrawer() {
  const isOpen = useCartStore((s) => s.isOpen);
  const closeCart = useCartStore((s) => s.closeCart);
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const totalItems = useCartStore(selectTotalItems);
  const totalPrice = useCartStore(selectTotalPrice);
  const isEmpty = useCartStore(selectIsEmpty);

  const handleCheckout = async () => {
    const result = await cartService.checkout(items, 'whatsapp');
    if (result.redirectUrl) {
      window.open(result.redirectUrl, '_blank');
    }
    closeCart();
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="flex flex-col w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-headline text-fluid-2xl text-primary">
            <ShoppingBag className="w-6 h-6" />
            Tu Carrito
            {totalItems > 0 && (
              <span className="text-fluid-sm text-muted-foreground font-body">
                ({totalItems} {totalItems === 1 ? 'artículo' : 'artículos'})
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {isEmpty ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 py-12">
            <ShoppingBag className="w-16 h-16 text-muted-foreground/30" />
            <div>
              <p className="text-fluid-lg font-semibold text-foreground/80">Tu carrito está vacío</p>
              <p className="text-fluid-sm text-muted-foreground mt-1">
                ¡Explora nuestra colección y encuentra algo que te encante!
              </p>
            </div>
            <Button variant="outline" onClick={closeCart}>
              Seguir Explorando
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-0">
                {items.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            </ScrollArea>

            <div className="space-y-4 pt-4">
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-fluid-base text-muted-foreground">Subtotal</span>
                <span className="text-fluid-xl font-bold text-foreground">
                  €{totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-fluid-xs text-muted-foreground">
                Envío y costos adicionales se calculan al finalizar.
              </p>

              <SheetFooter className="flex-col gap-2 sm:flex-col">
                <Button size="lg" className="w-full text-lg" onClick={handleCheckout}>
                  <WhatsApp className="mr-2" />
                  Pedir por WhatsApp
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-destructive hover:text-destructive"
                  onClick={clearCart}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Vaciar Carrito
                </Button>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
