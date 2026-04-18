import { SHOPIFY_API_VERSION, SHOPIFY_STOREFRONT_ACCESS_TOKEN, SHOPIFY_STORE_DOMAIN } from "@/lib/shopify/config";

type ShopifyResponse<T> = {
  data: T;
  errors?: Array<{ message: string }>;
};

export async function shopifyFetch<T>({
  query,
  variables,
  cache = "force-cache",
  tags = []
}: {
  query: string;
  variables?: Record<string, unknown>;
  cache?: RequestCache;
  tags?: string[];
}): Promise<T> {
  const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_ACCESS_TOKEN
    },
    body: JSON.stringify({ query, variables }),
    cache,
    next: {
      tags
    }
  });

  if (!response.ok) {
    throw new Error(`Shopify request failed: ${response.status}`);
  }

  const body = (await response.json()) as ShopifyResponse<T>;

  if (body.errors?.length) {
    throw new Error(body.errors.map((error) => error.message).join(", "));
  }

  return body.data;
}
