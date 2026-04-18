export const IMAGE_FRAGMENT = `
  fragment image on Image {
    url
    altText
    width
    height
  }
`;

export const MONEY_FRAGMENT = `
  fragment money on MoneyV2 {
    amount
    currencyCode
  }
`;

export const PRODUCT_FIELDS = `
  id
  title
  handle
  description
  featuredImage { ...image }
  images(first: 8) {
    nodes { ...image }
  }
  priceRange {
    minVariantPrice { ...money }
  }
  compareAtPriceRange {
    minVariantPrice { ...money }
  }
  availableForSale
  tags
  options {
    id
    name
    optionValues {
      name
    }
  }
  metafields(identifiers: [
    { namespace: "custom", key: "furniture_family" },
    { namespace: "custom", key: "complete_the_set" },
    { namespace: "custom", key: "bundle_message" }
  ]) {
    namespace
    key
    value
  }
`;

export const COLLECTION_FIELDS = `
  id
  title
  handle
  description
  image { ...image }
  metafields(identifiers: [
    { namespace: "custom", key: "mobile_intro" },
    { namespace: "custom", key: "featured_tags" }
  ]) {
    namespace
    key
    value
  }
`;

export const GET_HOME = `
  ${IMAGE_FRAGMENT}
  ${MONEY_FRAGMENT}
  query getHome {
    metaobject(handle: { type: "home_content", handle: "default" }) {
      fields {
        key
        value
      }
    }
    collections(first: 3, sortKey: UPDATED_AT) {
      nodes {
        ${COLLECTION_FIELDS}
        products(first: 4) {
          nodes {
            ${PRODUCT_FIELDS}
          }
        }
      }
    }
  }
`;

export const GET_COLLECTION_BY_HANDLE = `
  ${IMAGE_FRAGMENT}
  ${MONEY_FRAGMENT}
  query getCollectionByHandle($handle: String!, $sortKey: ProductCollectionSortKeys, $reverse: Boolean) {
    collection(handle: $handle) {
      ${COLLECTION_FIELDS}
      products(first: 24, sortKey: $sortKey, reverse: $reverse) {
        nodes {
          ${PRODUCT_FIELDS}
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_HANDLE = `
  ${IMAGE_FRAGMENT}
  ${MONEY_FRAGMENT}
  query getProductByHandle($handle: String!) {
    product(handle: $handle) {
      ${PRODUCT_FIELDS}
      seo {
        title
        description
      }
      collections(first: 3) {
        nodes {
          handle
          title
        }
      }
    }
  }
`;

export const GET_PRODUCTS_BY_HANDLES = `
  ${IMAGE_FRAGMENT}
  ${MONEY_FRAGMENT}
  query getProductsByHandles($query: String!) {
    products(first: 8, query: $query) {
      nodes {
        ${PRODUCT_FIELDS}
      }
    }
  }
`;
