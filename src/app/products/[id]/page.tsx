import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Heart, Minus, Plus, ShoppingCart, Star } from 'lucide-react';
import ProductShowcase from '@/components/ProductShowcase';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-16 md:space-y-24">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Creaciones</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            data-ai-hint={product.imageHint}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-6">
          <h1 className="font-headline text-4xl font-bold text-primary">{product.name}</h1>
          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold text-foreground">€{product.price}</p>
            <div className="flex items-center gap-1 text-yellow-500">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm text-muted-foreground ml-2">(12 reseñas)</span>
            </div>
          </div>
          <p className="text-lg text-muted-foreground">{product.description}</p>
          
          <div className="flex items-center gap-4">
            <p className="font-semibold">Cantidad:</p>
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-10 text-center font-bold">1</span>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1">
              <ShoppingCart className="mr-2" />
              Añadir al Carrito
            </Button>
            <Button variant="outline" size="lg">
              <Heart className="mr-2" />
              Añadir a Favoritos
            </Button>
          </div>
        </div>
      </div>

      <section>
        <h2 className="font-headline text-3xl md:text-4xl text-center mb-10 text-foreground/90">También te podría gustar</h2>
        <ProductShowcase excludeId={product.id} />
      </section>
    </div>
  );
}
