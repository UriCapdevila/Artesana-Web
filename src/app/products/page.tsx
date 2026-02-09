import { products } from "@/lib/products";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Creaciones</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Todas las Creaciones
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
          Explora la colección completa de cuadernos y bordados, cada uno con su propia historia.
        </p>
      </header>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product) => (
             <Card key={product.id} className="group overflow-hidden relative flex flex-col border-none shadow-none rounded-lg bg-transparent">
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="pt-4 flex-grow flex flex-col">
                <h3 className="font-headline text-xl text-foreground/90 bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out w-fit">{product.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{product.description}</p>
                <div className="flex justify-between items-end mt-auto pt-2">
                  <p className="text-lg font-semibold text-primary">€{product.price}</p>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
