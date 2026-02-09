import { products } from "@/lib/products";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ProductShowcase() {
  const featuredProducts = products.slice(0, 2);

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-headline">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 w-full mb-4">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="rounded-md object-cover" 
                  data-ai-hint={product.imageHint}
                />
              </div>
              <CardDescription>{product.description}</CardDescription>
              <p className="text-xl font-semibold mt-2 text-primary">€{product.price}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/products/${product.id}`}>Ver Detalles</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
