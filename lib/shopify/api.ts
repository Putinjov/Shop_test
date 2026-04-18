import { shopifyFetch } from "@/lib/shopify/client";
import {
  GET_COLLECTION_BY_HANDLE,
  GET_HOME,
  GET_PRODUCT_BY_HANDLE,
  GET_PRODUCTS_BY_HANDLES
} from "@/lib/shopify/queries";
import { normalizeCollection, normalizeProduct } from "@/lib/shopify/normalize";
import type { Collection, HeroContent, Product } from "@/types/shopify";
import { safeJsonParse } from "@/lib/utils/format";

type HomePayload = {
  metaobject: {
    fields: Array<{ key: string; value: string }>;
  } | null;
  collections: {
    nodes: any[];
  };
};

const defaultHero: HeroContent = {
  eyebrow: "Timeless comfort",
  title: "Modular furniture crafted for modern homes",
  subtitle: "Discover premium sofas, lounge chairs, and corner sets with fast delivery.",
  ctaLabel: "Shop living room",
  ctaHref: "/collections/living-room",
  imageUrl: "https://cdn.shopify.com/s/files/1/0000/0001/files/hero-furniture.jpg"
};

export async function getHomeData(): Promise<{ hero: HeroContent; collections: Collection[] }> {
  const data = await shopifyFetch<HomePayload>({ query: GET_HOME, tags: ["home"] });

  const heroField = data.metaobject?.fields.find((field) => field.key === "hero_content")?.value;
  const hero = safeJsonParse<HeroContent>(heroField, defaultHero);

  return {
    hero,
    collections: data.collections.nodes.map(normalizeCollection)
  };
}

export async function getCollectionData(handle: string, sort = "BEST_SELLING"): Promise<Collection | null> {
  const reverse = sort === "PRICE_DESC";
  const sortKey = sort === "PRICE_ASC" || sort === "PRICE_DESC" ? "PRICE" : sort;

  const data = await shopifyFetch<{ collection: any | null }>({
    query: GET_COLLECTION_BY_HANDLE,
    variables: { handle, sortKey, reverse },
    tags: ["collection", handle]
  });

  if (!data.collection) return null;

  return normalizeCollection(data.collection);
}

export async function getProductData(handle: string): Promise<Product | null> {
  const data = await shopifyFetch<{ product: any | null }>({
    query: GET_PRODUCT_BY_HANDLE,
    variables: { handle },
    tags: ["product", handle]
  });

  if (!data.product) return null;

  return normalizeProduct(data.product);
}

export async function getProductsByHandles(handles: string[]): Promise<Product[]> {
  if (!handles.length) return [];

  const query = handles.map((handle) => `handle:${handle}`).join(" OR ");
  const data = await shopifyFetch<{ products: { nodes: any[] } }>({
    query: GET_PRODUCTS_BY_HANDLES,
    variables: { query },
    tags: ["products", ...handles]
  });

  return data.products.nodes.map(normalizeProduct);
}
