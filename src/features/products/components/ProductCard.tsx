'use client';

import type { Product } from '@/features/products/types/product.types';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  sizes: string;
  /** Position in list for telemetry */
  listPosition?: number;
}

export default function ProductCard({ product, sizes, listPosition }: ProductCardProps) {
  const primaryImage = product.images.find((img) => img.isPrimary) ?? product.images[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="h-full w-full"
    >
      <Card className="h-full w-full group overflow-hidden relative flex flex-col rounded-lg bg-card transition-shadow duration-300 hover:shadow-xl">
        <Link href={`/products/${product.id}`} className="absolute inset-0 z-10" aria-label={`Ver ${product.name}`}>
          <span className="sr-only">Ver Detalles</span>
        </Link>
        <div className="overflow-hidden rounded-lg">
          <Image
            src={primaryImage?.url ?? ''}
            alt={primaryImage?.alt ?? product.name}
            width={400}
            height={300}
            className="object-cover w-full aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={primaryImage?.hint}
            sizes={sizes}
          />
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="font-headline text-fluid-xl text-foreground/90 bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out w-fit">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-fluid-sm mt-1 flex-grow">{product.description}</p>
          <div className="flex justify-between items-end mt-auto pt-2">
            <p className="text-fluid-lg font-semibold text-primary">€{product.price}</p>
            <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
