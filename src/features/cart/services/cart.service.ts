import type { CartItem } from '../types/cart.types';
import { WHATSAPP_NUMBER } from '@/shared/lib/constants';

export interface CheckoutPayload {
  items: Array<{
    productId: string;
    quantity: number;
    unitPrice: number;
  }>;
  customerNote?: string;
  contactMethod: 'whatsapp' | 'email';
}

export interface CheckoutResponse {
  orderId: string;
  status: 'pending' | 'confirmed';
  redirectUrl?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? '';

class CartService {
  /**
   * Submit cart for checkout.
   * Today: generates a WhatsApp redirect.
   * Tomorrow: POST /api/orders
   */
  async checkout(
    items: CartItem[],
    contactMethod: 'whatsapp' | 'email'
  ): Promise<CheckoutResponse> {
    if (contactMethod === 'whatsapp') {
      const message = this.buildWhatsAppMessage(items);
      return {
        orderId: `WA-${Date.now()}`,
        status: 'pending',
        redirectUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      };
    }

    // ── Future: API REST ──
    // const response = await fetch(`${API_BASE}/api/orders`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload),
    // });
    // return response.json();

    return { orderId: `EMAIL-${Date.now()}`, status: 'pending' };
  }

  private buildWhatsAppMessage(items: CartItem[]): string {
    const itemLines = items
      .map(
        (i) => `• ${i.quantity}x ${i.product.name} (€${i.product.price})`
      )
      .join('\n');
    const total = items.reduce(
      (sum, i) => sum + i.product.price * i.quantity,
      0
    );
    return `¡Hola! Me gustaría hacer un pedido:\n\n${itemLines}\n\nTotal: €${total}\n\n¡Gracias!`;
  }
}

export const cartService = new CartService();
