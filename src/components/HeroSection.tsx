'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function HeroSection({ heroImage }: { heroImage: ImagePlaceholder }) {
  return (
    <section className="relative h-[75vh] min-h-[500px] max-h-[700px] w-full flex items-center justify-center text-center text-white rounded-lg overflow-hidden shadow-2xl">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        data-ai-hint={heroImage.imageHint}
        fill
        className="object-cover brightness-[.65]"
        priority
      />
      <motion.div
        className="relative z-10 p-4 space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          className="font-headline text-5xl md:text-7xl font-bold text-white drop-shadow-lg"
          variants={itemVariants}
        >
          El Alma en Cada Detalle
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-stone-100 max-w-3xl mx-auto drop-shadow-md"
          variants={itemVariants}
        >
          Cuadernos y bordados artesanales, creados para contar tu propia historia.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button asChild size="lg" className="mt-6 text-lg group transition-transform duration-300 hover:scale-105">
            <Link href="/products">Explorar Creaciones <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" /></Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
