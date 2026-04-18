export type Image = {
  url: string;
  altText: string | null;
  width: number;
  height: number;
};

export type Money = {
  amount: string;
  currencyCode: string;
};

export type Metafield = {
  namespace: string;
  key: string;
  value: string;
};

export type ProductOptionValue = {
  name: string;
};

export type ProductOption = {
  id: string;
  name: string;
  values: ProductOptionValue[];
};

export type Product = {
  id: string;
  title: string;
  handle: string;
  description: string;
  featuredImage: Image | null;
  images: Image[];
  price: Money;
  compareAtPrice: Money | null;
  availableForSale: boolean;
  family: string[];
  completeTheSet: string[];
  bundleMessage: string | null;
  options: ProductOption[];
  tags: string[];
  metafields: Metafield[];
};

export type Collection = {
  id: string;
  title: string;
  handle: string;
  description: string;
  image: Image | null;
  products: Product[];
  metafields: Metafield[];
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  imageUrl: string;
};
