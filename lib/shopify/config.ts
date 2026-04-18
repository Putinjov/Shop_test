function requiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }

  return value;
}

export const SHOPIFY_STORE_DOMAIN = requiredEnv("SHOPIFY_STORE_DOMAIN");
export const SHOPIFY_STOREFRONT_ACCESS_TOKEN = requiredEnv("SHOPIFY_STOREFRONT_ACCESS_TOKEN");
export const SHOPIFY_API_VERSION = process.env.SHOPIFY_API_VERSION ?? "2025-10";
