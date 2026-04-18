export const IMAGE_FRAGMENT = `
  fragment ImageFields on Image {
    altText
    height
    url
    width
  }
`;

export const MONEY_FRAGMENT = `
  fragment MoneyFields on MoneyV2 {
    amount
    currencyCode
  }
`;

export const PRODUCT_CARD_FRAGMENT = `
  ${IMAGE_FRAGMENT}
  ${MONEY_FRAGMENT}

  fragment ProductCardFields on Product {
    availableForSale
    description
    handle
    id
    title
    images(first: 8) {
      nodes {
        ...ImageFields
      }
    }
    priceRange {
      minVariantPrice {
        ...MoneyFields
      }
    }
  }
`;
