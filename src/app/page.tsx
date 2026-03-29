import { productService } from '@/features/products';
import { ProductCard } from '@/features/products';
import { HeroSection, AboutCallout, InstagramFeed } from '@/features/home';
import { TrackableProduct } from '@/features/telemetry';
import { PlaceHolderImages } from '@/shared/assets/placeholder-images';
import { Button } from '@/components/ui/button';
import { Instagram } from '@/features/home/components/icons/Instagram';
import { WhatsApp } from '@/shared/components/icons/WhatsApp';
import { Mail } from 'lucide-react';
import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/shared/lib/constants';
import Link from 'next/link';

export default async function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-main')!;
  const artisanImage = PlaceHolderImages.find((p) => p.id === 'about-artisan')!;
  const allProducts = await productService.getAll();
  const featuredProducts = allProducts.slice(0, 4);

  return (
    <div className="space-y-fluid-section">
      <HeroSection heroImage={heroImage} />

      <section className="space-y-12">
        <header className="text-center">
          <h2 className="font-headline text-fluid-4xl font-bold text-primary">
            Creaciones Destacadas
          </h2>
          <p className="text-fluid-lg text-muted-foreground mt-2">
            Hecho a mano, con paciencia y dedicación.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TrackableProduct
            productId={featuredProducts[0].id}
            productCategory={featuredProducts[0].category}
            productPrice={featuredProducts[0].price}
            source="grid"
            listPosition={0}
            className="flex h-full w-full"
          >
            <ProductCard
              product={featuredProducts[0]}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </TrackableProduct>
          <TrackableProduct
            productId={featuredProducts[1].id}
            productCategory={featuredProducts[1].category}
            productPrice={featuredProducts[1].price}
            source="grid"
            listPosition={1}
            className="flex h-full w-full"
          >
            <ProductCard
              product={featuredProducts[1]}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </TrackableProduct>

          <AboutCallout artisanImage={artisanImage} />

          <TrackableProduct
            productId={featuredProducts[2].id}
            productCategory={featuredProducts[2].category}
            productPrice={featuredProducts[2].price}
            source="grid"
            listPosition={2}
            className="flex h-full w-full"
          >
            <ProductCard
              product={featuredProducts[2]}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </TrackableProduct>
          <TrackableProduct
            productId={featuredProducts[3].id}
            productCategory={featuredProducts[3].category}
            productPrice={featuredProducts[3].price}
            source="grid"
            listPosition={3}
            className="flex h-full w-full"
          >
            <ProductCard
              product={featuredProducts[3]}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </TrackableProduct>
        </div>
      </section>

      <InstagramFeed />

      <div className="text-center bg-card p-12 md:p-16 rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <h3 className="font-headline text-fluid-3xl mb-4 text-foreground/90">
          ¿Lista para encontrar tu próxima inspiración?
        </h3>
        <p className="text-muted-foreground text-fluid-lg mb-8 max-w-2xl mx-auto">
          Nuestra colección completa está esperando a ser descubierta. Cada pieza tiene una
          historia.
        </p>
        <Button asChild size="lg" variant="outline" className="text-lg">
          <Link href="/products">Ver Todas las Creaciones</Link>
        </Button>
      </div>

      <section id="contact" className="space-y-16 scroll-mt-20">
        <header className="text-center space-y-4">
          <h2 className="font-headline text-fluid-4xl font-bold text-primary">Hablemos</h2>
          <p className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes una pregunta, una idea para un encargo especial, o simplemente quieres
            saludar? Estaré encantada de escucharte.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg shadow-lg text-center flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <Mail className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-headline text-fluid-2xl text-foreground/90 mb-2">Email</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Para consultas, encargos o colaboraciones.
            </p>
            <Button asChild variant="outline">
              <a href="mailto:hola@artesana.com">Enviar un Mensaje</a>
            </Button>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg text-center flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <Instagram className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-headline text-fluid-2xl text-foreground/90 mb-2">Instagram</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Sigue mi proceso creativo y las últimas novedades.
            </p>
            <Button asChild variant="outline">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                {INSTAGRAM_HANDLE}
              </a>
            </Button>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg text-center flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <WhatsApp className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-headline text-fluid-2xl text-foreground/90 mb-2">WhatsApp</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Para una comunicación más directa y rápida.
            </p>
            <Button asChild variant="outline">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Chatear Ahora
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
