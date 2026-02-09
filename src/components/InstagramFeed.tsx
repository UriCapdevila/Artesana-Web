'use client';

import Link from 'next/link';
import Image from 'next/image';
import { instagramPosts } from '@/lib/instagram-posts';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Instagram as InstagramIcon } from '@/components/Instagram';
import Autoplay from "embla-carousel-autoplay"

export default function InstagramFeed() {
  return (
    <section className="space-y-16">
      <header className="text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Síguenos en Instagram
        </h2>
        <p className="text-lg text-muted-foreground mt-2">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            @artesana_handmade
          </a>
        </p>
      </header>
      <Carousel
        plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
            }),
          ]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {instagramPosts.map((post) => (
            <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="p-1">
                <Card className="overflow-hidden rounded-lg group">
                  <Link href={post.postUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver post ${post.id} en Instagram`}>
                    <div className="relative aspect-square">
                      <Image
                        src={post.imageUrl}
                        alt={`Post de Instagram ${post.id}`}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        data-ai-hint={post.imageHint}
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <InstagramIcon className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </Link>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
}
