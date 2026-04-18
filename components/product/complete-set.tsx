import type { Product } from "@/types/shopify";
import { ProductCard } from "@/components/ui/product-card";

export function CompleteSet({ products }: { products: Product[] }) {
  if (!products.length) return null;

  return (
    <section className="section-space">
      <div className="container-mobile space-y-4">
        <h2 className="text-xl font-semibold">Complete the set</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
