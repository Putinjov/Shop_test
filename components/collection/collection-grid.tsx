import type { Product } from "@/types/shopify";
import { ProductCard } from "@/components/ui/product-card";

export function CollectionGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
