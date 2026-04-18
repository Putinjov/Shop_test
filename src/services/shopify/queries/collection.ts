import { PRODUCT_CARD_FRAGMENT } from "@/services/shopify/fragments";
import { shopifyFetch } from "@/services/shopify/client";
import type { ShopifyCollection, ShopifyProduct } from "@/types/shopify";

type RawProduct = {
  availableForSale: boolean;
  description: string;
  handle: string;
  id: string;
  title: string;
  images: { nodes: ShopifyProduct["images"] };
  priceRange: { minVariantPrice: ShopifyProduct["price"] };
};

type CollectionQueryData = {
  collection: {
    description: string;
    handle: string;
    id: string;
    image: ShopifyCollection["image"];
    products: {
      nodes: RawProduct[];
    };
    title: string;
  } | null;
};

const COLLECTION_BY_HANDLE_QUERY = `
  ${PRODUCT_CARD_FRAGMENT}

  query CollectionByHandle($handle: String!) {
    collection(handle: $handle) {
      description
      handle
      id
      title
      image {
        ...ImageFields
      }
      products(first: 24) {
        nodes {
          ...ProductCardFields
        }
      }
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

export async function getCollectionByHandle(handle: string): Promise<ShopifyCollection | null> {
  const data = await shopifyFetch<CollectionQueryData, { handle: string }>({
    query: COLLECTION_BY_HANDLE_QUERY,
    tags: ["shopify-collection", handle],
    variables: { handle }
  });

  if (!data.collection) return null;

  return {
    description: data.collection.description,
    handle: data.collection.handle,
    id: data.collection.id,
    image: data.collection.image,
    products: data.collection.products.nodes.map(mapProduct),
    title: data.collection.title
  };
}

const FEATURED_COLLECTIONS_QUERY = `
  ${PRODUCT_CARD_FRAGMENT}

  query FeaturedCollections($count: Int!) {
    collections(first: $count, sortKey: UPDATED_AT) {
      nodes {
        description
        handle
        id
        title
        image {
          ...ImageFields
        }
        products(first: 8) {
          nodes {
            ...ProductCardFields
          }
        }
      }
    }
  }
`;

type FeaturedCollectionsData = {
  collections: {
    nodes: Array<NonNullable<CollectionQueryData["collection"]>>;
  };
};

export async function getFeaturedCollections(count = 4): Promise<ShopifyCollection[]> {
  const data = await shopifyFetch<FeaturedCollectionsData, { count: number }>({
    query: FEATURED_COLLECTIONS_QUERY,
    tags: ["shopify-featured-collections"],
    variables: { count }
  });

  return data.collections.nodes.map((collection) => ({
    description: collection.description,
    handle: collection.handle,
    id: collection.id,
    image: collection.image,
    products: collection.products.nodes.map(mapProduct),
    title: collection.title
  }));
}
