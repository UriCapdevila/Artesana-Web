import { products } from "@/lib/products";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

export default function ProductsPage() {
  return (
    <div className="space-y-8">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="relative aspect-[4/3] w-full mb-4">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="rounded-md object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    data-ai-hint={product.imageHint}
                  />
                </div>
                <CardDescription>{product.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center mt-auto pt-4">
                 <p className="text-xl font-semibold text-primary">€{product.price}</p>
                <Button asChild>
                  <Link href={`/products/${product.id}`}>Ver Detalles</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
