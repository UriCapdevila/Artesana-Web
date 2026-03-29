import { productService, ProductCard } from '@/features/products';
import { TrackableProduct } from '@/features/telemetry';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

export default async function ProductsPage() {
  const products = await productService.getAll();

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
        <h1 className="font-headline text-fluid-4xl font-bold text-primary">
          Todas las Creaciones
        </h1>
        <p className="text-fluid-lg text-muted-foreground max-w-3xl">
          Explora la colección completa de cuadernos y bordados, cada uno con su propia historia.
        </p>
      </header>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product, index) => (
            <TrackableProduct
              key={product.id}
              productId={product.id}
              productCategory={product.category}
              productPrice={product.price}
              source="grid"
              listPosition={index}
              className="flex h-full w-full"
            >
              <ProductCard
                product={product}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                listPosition={index}
              />
            </TrackableProduct>
          ))}
        </div>
      </section>
    </div>
  );
}
