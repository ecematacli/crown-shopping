interface PriceValues {
  centAmount: number;
  currencyCode: string;
  fractionDigits: number;
}

export interface ProductPrice {
  id: string;
  country: string;
  value: PriceValues;
  discounted: {
    value: PriceValues;
  };
}

export interface ProductVariant {
  id: number;
  sku: string;
  images: { url: string }[];
  price: ProductPrice;
  prices: ProductPrice[];
}

export interface Product {
  id: string;
  name: { en: string; de: string };
  categories: { id: string; typeId: string }[];
  createdAt: Date;
  lastModifiedAt: Date;
  masterVariant: ProductVariant;
  slug: { en: string; de: string };
}

export interface ProductsAPIResponse {
  results: Product[];
  limit: number;
  total: number;
  count: number;
  offset: number;
}
