import type { Product } from "@/lib/products";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductCard({ product, sizes }: { product: Product, sizes: string }) {
  return (
    <Card className="group overflow-hidden relative flex flex-col border-none shadow-none rounded-lg bg-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <Link href={`/products/${product.id}`} className="absolute inset-0 z-10" aria-label={`Ver ${product.name}`}>
        <span className="sr-only">Ver Detalles</span>
      </Link>
      <div className="overflow-hidden rounded-lg">
        <Image 
          src={product.image} 
          alt={product.name} 
          width={400}
          height={300}
          className="object-cover w-full aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
          data-ai-hint={product.imageHint}
          sizes={sizes}
        />
      </div>
      <div className="pt-4 flex-grow flex flex-col">
        <h3 className="font-headline text-xl text-foreground/90 bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out w-fit">{product.name}</h3>
        <p className="text-muted-foreground text-sm mt-1 flex-grow">{product.description}</p>
        <div className="flex justify-between items-end mt-auto pt-2">
          <p className="text-lg font-semibold text-primary">€{product.price}</p>
          <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0" />
        </div>
      </div>
    </Card>
  );
}