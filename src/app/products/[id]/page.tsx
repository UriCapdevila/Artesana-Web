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

        <ProductActions product={product} />
        
      </div>

      <section>
        <h2 className="font-headline text-3xl md:text-4xl text-center mb-10 text-foreground/90">También te podría gustar</h2>
        <ProductShowcase excludeId={product.id} />
      </section>
    </div>
  );
}
