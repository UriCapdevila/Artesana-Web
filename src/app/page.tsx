import ProductShowcase from "@/components/ProductShowcase";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Instagram } from '@/components/Instagram';
import { WhatsApp } from '@/components/WhatsApp';
import { Mail, Phone, ArrowRight } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-main')!;

  return (
    <div className="space-y-24 md:space-y-32">
      <section className="relative h-[75vh] min-h-[500px] max-h-[700px] w-full flex items-center justify-center text-center text-white rounded-lg overflow-hidden shadow-2xl">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover brightness-[.65]"
          priority
        />
        <div className="relative z-10 p-4 space-y-6">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            El Alma en Cada Detalle
          </h1>
          <p className="text-xl md:text-2xl text-stone-100 max-w-3xl mx-auto drop-shadow-md">
            Cuadernos y bordados artesanales, creados para contar tu propia historia.
          </p>
          <Button asChild size="lg" className="mt-6 text-lg">
            <Link href="/products">Explorar Creaciones <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      <section className="space-y-12">
        <header className="text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Creaciones Destacadas</h2>
            <p className="text-lg text-muted-foreground mt-2">Hecho a mano, con paciencia y dedicación.</p>
        </header>
        <ProductShowcase />
      </section>

      <div className="text-center bg-card p-12 md:p-16 rounded-lg shadow-lg">
        <h3 className="font-headline text-3xl md:text-4xl mb-4 text-foreground/90">¿Lista para encontrar tu próxima inspiración?</h3>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">Nuestra colección completa está esperando a ser descubierta. Cada pieza tiene una historia.</p>
        <Button asChild size="lg" variant="outline" className="text-lg">
          <Link href="/products">Ver Todas las Creaciones</Link>
        </Button>
      </div>

      <section id="contact" className="space-y-16 scroll-mt-20">
        <header className="text-center space-y-4">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Hablemos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes una pregunta, una idea para un encargo especial, o simplemente quieres saludar? Estaré encantada de escucharte.
          </p>
        </header>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          <div className="md:col-span-3">
             <ContactForm />
          </div>

          <div className="md:col-span-2 space-y-10">
              <div>
                <h3 className="font-headline text-2xl text-foreground/90 mb-4">Otras Formas de Contacto</h3>
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
              </div>
              <div>
                <h3 className="font-headline text-2xl text-foreground/90 mb-4">Sígueme</h3>
                 <div className="flex space-x-6">
                    <Link href="#" target="_blank" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                        <Instagram className="w-10 h-10" />
                    </Link>
                    <Link href="#" target="_blank" aria-label="WhatsApp" className="text-muted-foreground hover:text-primary transition-colors">
                        <WhatsApp className="w-10 h-10" />
                    </Link>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
