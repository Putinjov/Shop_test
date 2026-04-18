export type ShopifyImage = {
  altText: string | null;
  height: number | null;
  url: string;
  width: number | null;
};

export type ShopifyMoney = {
  amount: string;
  currencyCode: string;
};

export type ShopifyMenuItem = {
  id: string;
  resourceId: string | null;
  tags: string[];
  title: string;
  type: string;
  url: string | null;
  items: ShopifyMenuItem[];
};

export type ShopifyMenu = {
  handle: string;
  id: string;
  items: ShopifyMenuItem[];
  title: string;
};

export type ShopifyProduct = {
  availableForSale: boolean;
  description: string;
  handle: string;
  id: string;
  images: ShopifyImage[];
  price: ShopifyMoney;
  title: string;
};

export type ShopifyCollection = {
  description: string;
  handle: string;
  id: string;
  image: ShopifyImage | null;
  products: ShopifyProduct[];
  title: string;
};

export type ShopifyGraphQLError = {
  message: string;
  path?: (string | number)[];
};
