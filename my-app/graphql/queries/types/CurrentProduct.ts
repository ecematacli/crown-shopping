/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CurrentProduct
// ====================================================

export interface CurrentProduct_results_masterData_current {
  __typename: "ProductData";
  skus: string[];
  name: string | null;
}

export interface CurrentProduct_results_masterData {
  __typename: "ProductCatalogData";
  current: CurrentProduct_results_masterData_current | null;
}

export interface CurrentProduct_results {
  __typename: "Product";
  id: string;
  masterData: CurrentProduct_results_masterData;
}

export interface CurrentProduct {
  __typename: "ProductQueryResult";
  results: CurrentProduct_results[];
}
