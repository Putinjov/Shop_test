import "server-only";

import { getShopifyRuntimeConfig } from "@/services/shopify/config";
import {
  ShopifyConfigError,
  ShopifyGraphQLResponseError,
  ShopifyNetworkError,
  type ShopifyHandledError
} from "@/services/shopify/errors";
import type { ShopifyGraphQLError } from "@/types/shopify";

type GraphQLResponse<TData> = {
  data?: TData;
  errors?: ShopifyGraphQLError[];
};

type GraphQLRequestOptions<TVariables extends Record<string, unknown>> = {
  cache?: RequestCache;
  query: string;
  revalidate?: number;
  tags?: string[];
  variables?: TVariables;
};

export async function shopifyFetch<TData, TVariables extends Record<string, unknown> = Record<string, never>>(
  options: GraphQLRequestOptions<TVariables>
): Promise<TData> {
  const { cache = "force-cache", query, revalidate = 300, tags = [], variables } = options;

  let config: ReturnType<typeof getShopifyRuntimeConfig>;

  try {
    config = getShopifyRuntimeConfig();
  } catch (error) {
    throw new ShopifyConfigError(
      error instanceof Error ? error.message : "Failed to load Shopify runtime config"
    );
  }

  const response = await fetch(config.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": config.storefrontAccessToken
    },
    body: JSON.stringify({ query, variables }),
    cache,
    next: { revalidate, tags }
  });

  if (!response.ok) {
    throw new ShopifyNetworkError(
      `[Shopify] Request failed with status ${response.status}`,
      response.status
    );
  }

  const payload = (await response.json()) as GraphQLResponse<TData>;

  if (payload.errors?.length) {
    throw new ShopifyGraphQLResponseError("[Shopify] GraphQL errors received", payload.errors);
  }

  if (!payload.data) {
    throw new ShopifyGraphQLResponseError("[Shopify] Missing data in GraphQL response", []);
  }

  return payload.data;
}

export function isShopifyHandledError(error: unknown): error is ShopifyHandledError {
  return (
    error instanceof ShopifyConfigError ||
    error instanceof ShopifyNetworkError ||
    error instanceof ShopifyGraphQLResponseError
  );
}
