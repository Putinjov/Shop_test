import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/shopify";
import { formatCurrency } from "@/lib/utils/format";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-premium bg-white shadow-card">
      <Link href={`/products/${product.handle}`} className="block">
        <div className="relative aspect-[4/5] bg-sand-100">
          {product.featuredImage && (
            <Image
              src={product.featuredImage.url}
              alt={product.featuredImage.altText ?? product.title}
              fill
              sizes="(max-width: 640px) 92vw, 320px"
              className="object-cover"
            />
          )}
        </div>
        <div className="space-y-2 p-4">
          <h3 className="text-base font-medium">{product.title}</h3>
          <div className="flex items-center gap-2 text-sm">
            <p>{formatCurrency(product.price.amount, product.price.currencyCode)}</p>
            {product.compareAtPrice && (
              <p className="text-ink-600 line-through">
                {formatCurrency(product.compareAtPrice.amount, product.compareAtPrice.currencyCode)}
              </p>
            )}
          </div>
          {product.family.length > 0 && (
            <p className="text-xs text-ink-600">Also in: {product.family.join(" • ")}</p>
          )}
        </div>
      </Link>
    </article>
  );
}
