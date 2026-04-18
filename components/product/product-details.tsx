import type { Product } from "@/types/shopify";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils/format";

export function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p className="text-lg font-medium">{formatCurrency(product.price.amount, product.price.currencyCode)}</p>
        {product.bundleMessage && <p className="rounded-xl bg-accent-soft p-3 text-sm">{product.bundleMessage}</p>}
      </div>

      <div className="space-y-3 text-sm text-ink-600">
        <p>{product.description}</p>
        {product.family.length > 0 && <p>Available sizes: {product.family.join(" • ")}</p>}
      </div>

      <div className="sticky bottom-3 z-30 rounded-full bg-sand-50/95 p-1 backdrop-blur sm:static sm:bg-transparent sm:p-0">
        <Button className="w-full">Add to cart</Button>
      </div>

      <details className="rounded-xl border border-ink-800/10 bg-white p-4" open>
        <summary className="cursor-pointer text-sm font-medium">Delivery & returns</summary>
        <p className="mt-3 text-sm text-ink-600">Delivered in 3-7 days. 30-day returns on unopened packages.</p>
      </details>
    </div>
  );
}
