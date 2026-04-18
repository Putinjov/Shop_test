import Image from "next/image";
import type { Product } from "@/types/shopify";

export function ProductGallery({ product }: { product: Product }) {
  const images = product.images.length ? product.images : product.featuredImage ? [product.featuredImage] : [];

  return (
    <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0">
      {images.map((image, index) => (
        <div key={`${image.url}-${index}`} className="relative aspect-square w-[84vw] snap-center overflow-hidden rounded-premium bg-white sm:w-auto">
          <Image
            src={image.url}
            alt={image.altText ?? product.title}
            fill
            sizes="(max-width: 640px) 84vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
