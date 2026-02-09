import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Instagram } from '@/components/Instagram';
import { WhatsApp } from '@/components/WhatsApp';
import { Mail, Phone } from 'lucide-react';
import ProductCard from "@/components/ProductCard";
import HeroSection from "@/components/HeroSection";
import AboutCallout from "@/components/AboutCallout";
import InstagramFeed from "@/components/InstagramFeed";

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-main')!;
  const artisanImage = PlaceHolderImages.find(p => p.id === 'about-artisan')!;
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="space-y-24 md:space-y-32">
      <HeroSection heroImage={heroImage} />

      <section className="space-y-12">
        <header className="text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Creaciones Destacadas</h2>
            <p className="text-lg text-muted-foreground mt-2">Hecho a mano, con paciencia y dedicación.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductCard product={featuredProducts[0]} sizes="(max-width: 768px) 100vw, 50vw" />
          <ProductCard product={featuredProducts[1]} sizes="(max-width: 768px) 100vw, 50vw" />

          <AboutCallout artisanImage={artisanImage} />

          <ProductCard product={featuredProducts[2]} sizes="(max-width: 768px) 100vw, 50vw" />
          <ProductCard product={featuredProducts[3]} sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </section>

      <div className="text-center bg-card p-12 md:p-16 rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <h3 className="font-headline text-3xl md:text-4xl mb-4 text-foreground/90">¿Lista para encontrar tu próxima inspiración?</h3>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">Nuestra colección completa está esperando a ser descubierta. Cada pieza tiene una historia.</p>
        <Button asChild size="lg" variant="outline" className="text-lg">
          <Link href="/products">Ver Todas las Creaciones</Link>
        </Button>
      </div>

      <InstagramFeed />

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
