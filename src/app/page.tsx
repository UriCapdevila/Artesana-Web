import ProductShowcase from "@/components/ProductShowcase";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Instagram } from '@/components/Instagram';
import { WhatsApp } from '@/components/WhatsApp';
import { Mail, Phone } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-main')!;

  return (
    <div className="space-y-16 md:space-y-24">
      <section className="relative h-[60vh] min-h-[400px] max-h-[600px] w-full flex items-center justify-center text-center text-white rounded-lg overflow-hidden shadow-lg">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 p-4 space-y-4">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-white drop-shadow-md">
            El Alma en Cada Detalle
          </h1>
          <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto drop-shadow-sm">
            Descubre piezas únicas de joyería, hechas a mano con amor y dedicación.
          </p>
          <Button asChild size="lg" className="bg-primary/80 hover:bg-primary border-primary-foreground/20 border backdrop-blur-sm text-primary-foreground mt-4">
            <Link href="/products">Explorar Colección</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-headline text-3xl md:text-4xl text-center mb-10 text-foreground/90">Productos Destacados</h2>
        <ProductShowcase />
      </section>

      <div className="text-center pb-8 bg-card p-8 rounded-lg shadow-sm">
        <h3 className="font-headline text-2xl md:text-3xl mb-4">¿Lista para encontrar tu próxima joya?</h3>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Nuestra colección completa está esperando a ser descubierta. Cada pieza tiene una historia que contar.</p>
        <Button asChild size="lg">
          <Link href="/products">Ver Todos los Productos</Link>
        </Button>
      </div>

      <section id="contact" className="space-y-12 scroll-mt-20">
        <header className="text-center space-y-4">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Hablemos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes una pregunta, una idea para un encargo especial, o simplemente quieres saludar? Estaré encantada de escucharte.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />

          <div className="space-y-8">
              <h2 className="font-headline text-2xl text-foreground/90">Otras Formas de Contacto</h2>
              <div className="space-y-4">
                  <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-primary" />
                      <a href="mailto:hola@artesana.com" className="text-lg hover:text-primary transition-colors">hola@artesana.com</a>
                  </div>
                 <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <a href="tel:+34600000000" className="text-lg hover:text-primary transition-colors">+34 600 000 000</a>
                </div>
            </div>
            <h2 className="font-headline text-2xl text-foreground/90 mt-8">Sígueme</h2>
             <div className="flex space-x-4">
                <Link href="#" target="_blank" aria-label="Instagram" className="hover:text-primary transition-colors">
                    <Instagram className="w-8 h-8" />
                </Link>
                <Link href="#" target="_blank" aria-label="WhatsApp" className="hover:text-primary transition-colors">
                    <WhatsApp className="w-8 h-8" />
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
