import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ProductShowcase from '@/components/ProductShowcase';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import ProductActions from '@/components/ProductActions';

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
    <div className="space-y-20 md:space-y-28">
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
      
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl bg-card">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            data-ai-hint={product.imageHint}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <ProductActions product={product} />
        
      </div>

      <section className="space-y-12">
        <header className="text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">También te podría gustar</h2>
        </header>
        <ProductShowcase excludeId={product.id} />
      </section>
    </div>
  );
}
