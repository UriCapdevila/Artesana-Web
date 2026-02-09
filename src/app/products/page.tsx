import { products } from "@/lib/products";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import ProductCard from "@/components/ProductCard";

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
             <ProductCard 
                key={product.id} 
                product={product}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
          ))}
        </div>
      </section>
    </div>
  );
}
