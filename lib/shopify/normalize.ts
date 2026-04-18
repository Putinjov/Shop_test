import type { Collection, Metafield, Product } from "@/types/shopify";
import { safeJsonParse } from "@/lib/utils/format";

type RawMetafield = Metafield | null;

function parseFamilies(metafields: RawMetafield[]): string[] {
  const raw = metafields.find((field) => field?.key === "furniture_family")?.value;
  return safeJsonParse<string[]>(raw, []);
}

function parseCompleteTheSet(metafields: RawMetafield[]): string[] {
  const raw = metafields.find((field) => field?.key === "complete_the_set")?.value;
  return safeJsonParse<string[]>(raw, []);
}

function parseBundleMessage(metafields: RawMetafield[]): string | null {
  return metafields.find((field) => field?.key === "bundle_message")?.value ?? null;
}

export function normalizeProduct(product: any): Product {
  const metafields = (product.metafields ?? []).filter(Boolean);

  return {
    id: product.id,
    title: product.title,
    handle: product.handle,
    description: product.description,
    featuredImage: product.featuredImage,
    images: product.images?.nodes ?? [],
    price: product.priceRange.minVariantPrice,
    compareAtPrice: product.compareAtPriceRange.minVariantPrice,
    availableForSale: product.availableForSale,
    family: parseFamilies(metafields),
    completeTheSet: parseCompleteTheSet(metafields),
    bundleMessage: parseBundleMessage(metafields),
    options: (product.options ?? []).map((opt: any) => ({
      id: opt.id,
      name: opt.name,
      values: (opt.optionValues ?? []).map((value: any) => ({ name: value.name }))
    })),
    tags: product.tags ?? [],
    metafields
  };
}

export function normalizeCollection(collection: any): Collection {
  return {
    id: collection.id,
    title: collection.title,
    handle: collection.handle,
    description: collection.description,
    image: collection.image,
    products: (collection.products?.nodes ?? []).map(normalizeProduct),
    metafields: (collection.metafields ?? []).filter(Boolean)
  };
}
