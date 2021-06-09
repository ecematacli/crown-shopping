/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Product
// ====================================================

export interface Product_product_masterData_current_categories {
  __typename: "Category";
  name: string | null;
  slug: string | null;
}

export interface Product_product_masterData_current_variant_prices_value {
  __typename: "Money" | "HighPrecisionMoney";
  centAmount: any;
  fractionDigits: number;
  currencyCode: any;
}

export interface Product_product_masterData_current_variant_prices_discounted_value {
  __typename: "Money" | "HighPrecisionMoney";
  centAmount: any;
  fractionDigits: number;
  currencyCode: any;
}

export interface Product_product_masterData_current_variant_prices_discounted {
  __typename: "DiscountedProductPriceValue";
  value: Product_product_masterData_current_variant_prices_discounted_value;
}

export interface Product_product_masterData_current_variant_prices {
  __typename: "ProductPrice";
  id: string | null;
  country: any | null;
  value: Product_product_masterData_current_variant_prices_value;
  discounted: Product_product_masterData_current_variant_prices_discounted | null;
}

export interface Product_product_masterData_current_variant_price_value {
  __typename: "Money" | "HighPrecisionMoney";
  centAmount: any;
  fractionDigits: number;
  currencyCode: any;
}

export interface Product_product_masterData_current_variant_price_discounted_value {
  __typename: "Money" | "HighPrecisionMoney";
  centAmount: any;
  fractionDigits: number;
  currencyCode: any;
}

export interface Product_product_masterData_current_variant_price_discounted {
  __typename: "DiscountedProductPriceValue";
  value: Product_product_masterData_current_variant_price_discounted_value;
}

export interface Product_product_masterData_current_variant_price {
  __typename: "ProductPrice";
  id: string | null;
  country: any | null;
  value: Product_product_masterData_current_variant_price_value;
  discounted: Product_product_masterData_current_variant_price_discounted | null;
}

export interface Product_product_masterData_current_variant_images {
  __typename: "Image";
  url: string;
}

export interface Product_product_masterData_current_variant_attributesRaw_attributeDefinition {
  __typename: "AttributeDefinition";
  name: string;
  label: string | null;
}

export interface Product_product_masterData_current_variant_attributesRaw {
  __typename: "RawProductAttribute";
  name: string;
  value: any;
  attributeDefinition: Product_product_masterData_current_variant_attributesRaw_attributeDefinition | null;
}

export interface Product_product_masterData_current_variant {
  __typename: "ProductVariant";
  id: number;
  sku: string | null;
  prices: Product_product_masterData_current_variant_prices[] | null;
  /**
   * Returns a single price based on the price selection rules.
   */
  price: Product_product_masterData_current_variant_price | null;
  images: Product_product_masterData_current_variant_images[];
  /**
   * This field contains non-typed data. Consider using `attributes` as a typed alternative.
   */
  attributesRaw: Product_product_masterData_current_variant_attributesRaw[];
}

export interface Product_product_masterData_current_masterVariant_prices_value {
  __typename: "Money" | "HighPrecisionMoney";
  centAmount: any;
  fractionDigits: number;
  currencyCode: any;
}

export interface Product_product_masterData_current_masterVariant_prices_discounted_value {
  __typename: "Money" | "HighPrecisionMoney";
  centAmount: any;
  fractionDigits: number;
  currencyCode: any;
}

export interface Product_product_masterData_current_masterVariant_prices_discounted {
  __typename: "DiscountedProductPriceValue";
  value: Product_product_masterData_current_masterVariant_prices_discounted_value;
}

export interface Product_product_masterData_current_masterVariant_prices {
  __typename: "ProductPrice";
  id: string | null;
  country: any | null;
  value: Product_product_masterData_current_masterVariant_prices_value;
  discounted: Product_product_masterData_current_masterVariant_prices_discounted | null;
}

export interface Product_product_masterData_current_masterVariant_price_value {
  __typename: "Money" | "HighPrecisionMoney";
  centAmount: any;
  fractionDigits: number;
  currencyCode: any;
}

export interface Product_product_masterData_current_masterVariant_price_discounted_value {
  __typename: "Money" | "HighPrecisionMoney";
  centAmount: any;
  fractionDigits: number;
  currencyCode: any;
}

export interface Product_product_masterData_current_masterVariant_price_discounted {
  __typename: "DiscountedProductPriceValue";
  value: Product_product_masterData_current_masterVariant_price_discounted_value;
}

export interface Product_product_masterData_current_masterVariant_price {
  __typename: "ProductPrice";
  id: string | null;
  country: any | null;
  value: Product_product_masterData_current_masterVariant_price_value;
  discounted: Product_product_masterData_current_masterVariant_price_discounted | null;
}

export interface Product_product_masterData_current_masterVariant_images {
  __typename: "Image";
  url: string;
}

export interface Product_product_masterData_current_masterVariant_attributesRaw_attributeDefinition {
  __typename: "AttributeDefinition";
  name: string;
  label: string | null;
}

export interface Product_product_masterData_current_masterVariant_attributesRaw {
  __typename: "RawProductAttribute";
  name: string;
  value: any;
  attributeDefinition: Product_product_masterData_current_masterVariant_attributesRaw_attributeDefinition | null;
}

export interface Product_product_masterData_current_masterVariant {
  __typename: "ProductVariant";
  id: number;
  sku: string | null;
  prices: Product_product_masterData_current_masterVariant_prices[] | null;
  /**
   * Returns a single price based on the price selection rules.
   */
  price: Product_product_masterData_current_masterVariant_price | null;
  images: Product_product_masterData_current_masterVariant_images[];
  /**
   * This field contains non-typed data. Consider using `attributes` as a typed alternative.
   */
  attributesRaw: Product_product_masterData_current_masterVariant_attributesRaw[];
}

export interface Product_product_masterData_current_allVariants_prices_value {
  __typename: "Money" | "HighPrecisionMoney";
  centAmount: any;
  fractionDigits: number;
  currencyCode: any;
}

export interface Product_product_masterData_current_allVariants_prices_discounted_value {
  __typename: "Money" | "HighPrecisionMoney";
  centAmount: any;
  fractionDigits: number;
  currencyCode: any;
}

export interface Product_product_masterData_current_allVariants_prices_discounted {
  __typename: "DiscountedProductPriceValue";
  value: Product_product_masterData_current_allVariants_prices_discounted_value;
}

export interface Product_product_masterData_current_allVariants_prices {
  __typename: "ProductPrice";
  id: string | null;
  country: any | null;
  value: Product_product_masterData_current_allVariants_prices_value;
  discounted: Product_product_masterData_current_allVariants_prices_discounted | null;
}

export interface Product_product_masterData_current_allVariants_price_value {
  __typename: "Money" | "HighPrecisionMoney";
  centAmount: any;
  fractionDigits: number;
  currencyCode: any;
}

export interface Product_product_masterData_current_allVariants_price_discounted_value {
  __typename: "Money" | "HighPrecisionMoney";
  centAmount: any;
  fractionDigits: number;
  currencyCode: any;
}

export interface Product_product_masterData_current_allVariants_price_discounted {
  __typename: "DiscountedProductPriceValue";
  value: Product_product_masterData_current_allVariants_price_discounted_value;
}

export interface Product_product_masterData_current_allVariants_price {
  __typename: "ProductPrice";
  id: string | null;
  country: any | null;
  value: Product_product_masterData_current_allVariants_price_value;
  discounted: Product_product_masterData_current_allVariants_price_discounted | null;
}

export interface Product_product_masterData_current_allVariants_images {
  __typename: "Image";
  url: string;
}

export interface Product_product_masterData_current_allVariants_attributesRaw_attributeDefinition {
  __typename: "AttributeDefinition";
  name: string;
  label: string | null;
}

export interface Product_product_masterData_current_allVariants_attributesRaw {
  __typename: "RawProductAttribute";
  name: string;
  value: any;
  attributeDefinition: Product_product_masterData_current_allVariants_attributesRaw_attributeDefinition | null;
}

export interface Product_product_masterData_current_allVariants {
  __typename: "ProductVariant";
  id: number;
  sku: string | null;
  prices: Product_product_masterData_current_allVariants_prices[] | null;
  /**
   * Returns a single price based on the price selection rules.
   */
  price: Product_product_masterData_current_allVariants_price | null;
  images: Product_product_masterData_current_allVariants_images[];
  /**
   * This field contains non-typed data. Consider using `attributes` as a typed alternative.
   */
  attributesRaw: Product_product_masterData_current_allVariants_attributesRaw[];
}

export interface Product_product_masterData_current {
  __typename: "ProductData";
  name: string | null;
  description: string | null;
  slug: string | null;
  categories: Product_product_masterData_current_categories[];
  variant: Product_product_masterData_current_variant | null;
  masterVariant: Product_product_masterData_current_masterVariant;
  allVariants: Product_product_masterData_current_allVariants[];
}

export interface Product_product_masterData {
  __typename: "ProductCatalogData";
  published: boolean;
  current: Product_product_masterData_current | null;
}

export interface Product_product {
  __typename: "Product";
  id: string;
  masterData: Product_product_masterData;
}

export interface Product_inventoryEntries_results {
  __typename: "InventoryEntry";
  id: string;
  quantityOnStock: any;
  availableQuantity: any;
}

export interface Product_inventoryEntries {
  __typename: "InventoryEntryQueryResult";
  results: Product_inventoryEntries_results[];
}

export interface Product {
  product: Product_product | null;
  inventoryEntries: Product_inventoryEntries;
}

export interface ProductVariables {
  sku: string;
  locale: any;
  currency: any;
  country?: any | null;
  where: string;
  skus?: string[] | null;
}
