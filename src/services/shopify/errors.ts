import type { ShopifyGraphQLError } from "@/types/shopify";

export class ShopifyConfigError extends Error {
  readonly name = "ShopifyConfigError";
}

export class ShopifyNetworkError extends Error {
  readonly name = "ShopifyNetworkError";

  constructor(
    message: string,
    readonly status: number
  ) {
    super(message);
  }
}

export class ShopifyGraphQLResponseError extends Error {
  readonly name = "ShopifyGraphQLResponseError";

  constructor(
    message: string,
    readonly errors: ShopifyGraphQLError[]
  ) {
    super(message);
  }
}

export type ShopifyHandledError =
  | ShopifyConfigError
  | ShopifyGraphQLResponseError
  | ShopifyNetworkError;
