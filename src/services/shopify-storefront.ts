export type ShopifyConfig = {
  storeDomain: string;
  storefrontAccessToken: string;
  apiVersion: string;
};

export function getShopifyConfig(): ShopifyConfig {
  return {
    storeDomain: process.env.SHOPIFY_STORE_DOMAIN ?? "",
    storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN ?? "",
    apiVersion: process.env.SHOPIFY_API_VERSION ?? "2025-10"
  };
}

export function getShopifyEndpoint(config: ShopifyConfig): string {
  if (!config.storeDomain) return "";
  return `https://${config.storeDomain}/api/${config.apiVersion}/graphql.json`;
}
