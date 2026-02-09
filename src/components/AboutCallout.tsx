'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

export default function AboutCallout({ artisanImage }: { artisanImage: ImagePlaceholder }) {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="md:col-span-2 group relative"
    >
        <Link href="/about" className="absolute inset-0 z-10" aria-label="Sobre la artesana">
        <span className="sr-only">Sobre la artesana</span>
        </Link>
        <Card className="h-full flex flex-col md:flex-row items-center overflow-hidden bg-card transition-all duration-300 group-hover:shadow-2xl">
            <div className="relative w-full md:w-1/3 aspect-[4/3] md:aspect-auto md:h-full">
                <Image
                    src={artisanImage.imageUrl}
                    alt={artisanImage.description}
                    data-ai-hint={artisanImage.imageHint}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="flex-1 p-8 md:p-12 text-center md:text-left">
                <h3 className="font-headline text-3xl font-bold text-primary mb-4">La Artesana Detrás de la Magia</h3>
                <p className="text-muted-foreground mb-6">"Cada puntada y cada página en blanco son una promesa de una nueva historia."</p>
                <div className="inline-flex items-center justify-center md:justify-start gap-2 text-primary font-bold">
                    <span>Conoce mi historia</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
            </div>
        </Card>
    </motion.div>
  );
}
