/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: products
// ====================================================

export interface products_products_results_masterData_staged {
  __typename: "ProductData";
  skus: string[];
  name: string | null;
}

export interface products_products_results_masterData_current {
  __typename: "ProductData";
  skus: string[];
  name: string | null;
}

export interface products_products_results_masterData {
  __typename: "ProductCatalogData";
  staged: products_products_results_masterData_staged | null;
  current: products_products_results_masterData_current | null;
}

export interface products_products_results {
  __typename: "Product";
  id: string;
  masterData: products_products_results_masterData;
}

export interface products_products {
  __typename: "ProductQueryResult";
  results: products_products_results[];
}

export interface products {
  products: products_products;
}

export interface productsVariables {
  locale: any;
  where?: string | null;
}
