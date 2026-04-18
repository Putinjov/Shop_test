import type { Collection } from "@/types/shopify";
import { ProductCard } from "@/components/ui/product-card";

export function CollectionStrip({ collection }: { collection: Collection }) {
  return (
    <section className="section-space">
      <div className="container-mobile space-y-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-xl font-semibold">{collection.title}</h2>
            <p className="text-sm text-ink-600">{collection.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {collection.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
