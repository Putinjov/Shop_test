import "server-only";

export type ShopifyRuntimeConfig = {
  apiVersion: string;
  endpoint: string;
  storefrontAccessToken: string;
};

function getEnv(name: "SHOPIFY_STORE_DOMAIN" | "SHOPIFY_STOREFRONT_ACCESS_TOKEN"): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`[Shopify] Missing required environment variable: ${name}`);
  }

  return value;
}

export function getShopifyRuntimeConfig(): ShopifyRuntimeConfig {
  const storeDomain = getEnv("SHOPIFY_STORE_DOMAIN");
  const storefrontAccessToken = getEnv("SHOPIFY_STOREFRONT_ACCESS_TOKEN");
  const apiVersion = process.env.SHOPIFY_API_VERSION ?? "2025-10";

  return {
    apiVersion,
    endpoint: `https://${storeDomain}/api/${apiVersion}/graphql.json`,
    storefrontAccessToken
  };
}
