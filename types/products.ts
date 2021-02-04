interface PriceValues {
  type: string;
  centAmount: number;
  currencyCode: string;
  fractionDigits: number;
}

export interface ProductPrice {
  id: string;
  value: PriceValues;
  discounted: {
    discount: { id: string };
    value: PriceValues;
  };
}

export interface Product {
  id: string;
  name: { en: string; de: string };
  categories: { id: string; typeId: string }[];
  createdAt: Date;
  lastModifiedAt: Date;
  masterVariant: {
    id: number;
    images: { url: string; dimensions: { w: number; h: number } }[];
    price: { country: string };
    prices: ProductPrice[];
  };
  slug: { en: string; de: string };
}

export interface ProductsAPIResponse {
  results: Product[];
  limit: number;
  total: number;
  count: number;
  offset: number;
}
