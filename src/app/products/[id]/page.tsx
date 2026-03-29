import { productService, ProductActions, ProductShowcase } from '@/features/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export async function generateStaticParams() {
  const products = await productService.getAll();
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await productService.getById(params.id);

  if (!product) {
    notFound();
  }

  const primaryImage = product.images.find((img) => img.isPrimary) ?? product.images[0];

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
            src={primaryImage?.url ?? ''}
            alt={primaryImage?.alt ?? product.name}
            fill
            className="object-cover"
            data-ai-hint={primaryImage?.hint}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <ProductActions product={product} />
      </div>

      <section className="space-y-12">
        <header className="text-center">
          <h2 className="font-headline text-fluid-4xl font-bold text-primary">
            También te podría gustar
          </h2>
        </header>
        <ProductShowcase excludeId={product.id} />
      </section>
    </div>
  );
}
