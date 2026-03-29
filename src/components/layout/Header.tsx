'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { WhatsApp } from '@/shared/components/icons/WhatsApp';
import { useCartStore, selectTotalItems } from '@/features/cart';
import { WHATSAPP_URL } from '@/shared/lib/constants';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/products', label: 'Creaciones' },
  { href: '/about', label: 'Sobre Mí' },
  { href: '/#contact', label: 'Contacto' },
];

function CartButton() {
  const totalItems = useCartStore(selectTotalItems);
  const openCart = useCartStore((s) => s.openCart);

  return (
    <Button variant="ghost" size="icon" onClick={openCart} className="relative" aria-label="Abrir carrito">
      <ShoppingBag className="h-5 w-5" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center animate-in zoom-in-50 duration-200">
          {totalItems}
        </span>
      )}
    </Button>
  );
}

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-bold text-primary font-headline"
        >
          <Image src="/Logo.png" alt="Logo de Artesana" width={40} height={40} />
          <span>Artesana</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <CartButton />
          <Button asChild variant="outline">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsApp className="mr-2 h-4 w-4" />
              Chatear
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <CartButton />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg text-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild variant="default" className="mt-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <WhatsApp className="mr-2 h-4 w-4" />
                    Chatear por WhatsApp
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
