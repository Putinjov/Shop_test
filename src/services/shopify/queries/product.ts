import { PRODUCT_CARD_FRAGMENT } from "@/services/shopify/fragments";
import { shopifyFetch } from "@/services/shopify/client";
import type { ShopifyProduct } from "@/types/shopify";

type RawProduct = {
  availableForSale: boolean;
  description: string;
  handle: string;
  id: string;
  title: string;
  images: { nodes: ShopifyProduct["images"] };
  priceRange: { minVariantPrice: ShopifyProduct["price"] };
};

type ProductByHandleData = {
  product: RawProduct | null;
};

const PRODUCT_BY_HANDLE_QUERY = `
  ${PRODUCT_CARD_FRAGMENT}

  query ProductByHandle($handle: String!) {
    product(handle: $handle) {
      ...ProductCardFields
    }
  }
`;

function mapProduct(product: RawProduct): ShopifyProduct {
  return {
    availableForSale: product.availableForSale,
    description: product.description,
    handle: product.handle,
    id: product.id,
    images: product.images.nodes,
    price: product.priceRange.minVariantPrice,
    title: product.title
  };
}

export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  const data = await shopifyFetch<ProductByHandleData, { handle: string }>({
    query: PRODUCT_BY_HANDLE_QUERY,
    tags: ["shopify-product", handle],
    variables: { handle }
  });

  if (!data.product) return null;

  return mapProduct(data.product);
}

const FEATURED_PRODUCTS_QUERY = `
  ${PRODUCT_CARD_FRAGMENT}

  query FeaturedProducts($count: Int!) {
    products(first: $count, sortKey: BEST_SELLING) {
      nodes {
        ...ProductCardFields
      }
    }
  }
`;

type FeaturedProductsData = {
  products: {
    nodes: RawProduct[];
  };
};

export async function getFeaturedProducts(count = 8): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<FeaturedProductsData, { count: number }>({
    query: FEATURED_PRODUCTS_QUERY,
    tags: ["shopify-featured-products"],
    variables: { count }
  });

  return data.products.nodes.map(mapProduct);
}
