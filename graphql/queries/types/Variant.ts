/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Variant
// ====================================================

export interface Variant_prices_value {
  __typename: "Money" | "HighPrecisionMoney";
  centAmount: any;
  fractionDigits: number;
  currencyCode: any;
}

export interface Variant_prices_discounted_value {
  __typename: "Money" | "HighPrecisionMoney";
  centAmount: any;
  fractionDigits: number;
  currencyCode: any;
}

export interface Variant_prices_discounted {
  __typename: "DiscountedProductPriceValue";
  value: Variant_prices_discounted_value;
}

export interface Variant_prices {
  __typename: "ProductPrice";
  id: string | null;
  country: any | null;
  value: Variant_prices_value;
  discounted: Variant_prices_discounted | null;
}

export interface Variant_price_value {
  __typename: "Money" | "HighPrecisionMoney";
  centAmount: any;
  fractionDigits: number;
  currencyCode: any;
}

export interface Variant_price_discounted_value {
  __typename: "Money" | "HighPrecisionMoney";
  centAmount: any;
  fractionDigits: number;
  currencyCode: any;
}

export interface Variant_price_discounted {
  __typename: "DiscountedProductPriceValue";
  value: Variant_price_discounted_value;
}

export interface Variant_price {
  __typename: "ProductPrice";
  id: string | null;
  country: any | null;
  value: Variant_price_value;
  discounted: Variant_price_discounted | null;
}

export interface Variant_images {
  __typename: "Image";
  url: string;
}

export interface Variant {
  __typename: "ProductVariant";
  id: number;
  sku: string | null;
  prices: Variant_prices[] | null;
  /**
   * Returns a single price based on the price selection rules.
   */
  price: Variant_price | null;
  images: Variant_images[];
}
