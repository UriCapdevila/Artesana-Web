import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { WhatsApp } from "@/components/WhatsApp";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/products", label: "Creaciones" },
  { href: "/about", label: "Sobre Mí" },
  { href: "/#contact", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-primary font-headline">
          <Image src="/Logo.png" alt="Logo de Artesana" width={40} height={40} />
          <span>Artesana</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-foreground/80 hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Cart -> WhatsApp */}
        <div className="hidden md:block">
          <Button asChild variant="outline">
            <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
              <WhatsApp className="mr-2 h-4 w-4" />
              Chatear
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
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
                  <Link key={link.href} href={link.href} className="text-lg text-foreground hover:text-primary">
                    {link.label}
                  </Link>
                ))}
                <Button asChild variant="default" className="mt-4">
                   <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
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
