import { isShopifyHandledError } from "@/services/shopify/client";
import { getCollectionByHandle, getFeaturedCollections } from "@/services/shopify/queries/collection";
import { getMenuByHandle } from "@/services/shopify/queries/menu";
import { getFeaturedProducts, getProductByHandle } from "@/services/shopify/queries/product";

export {
  getCollectionByHandle,
  getFeaturedCollections,
  getFeaturedProducts,
  getMenuByHandle,
  getProductByHandle
};

export function logShopifyError(error: unknown, context: string): void {
  if (isShopifyHandledError(error)) {
    console.error(`[${context}] ${error.name}: ${error.message}`);
    return;
  }

  console.error(`[${context}] Unknown Shopify error`, error);
}
