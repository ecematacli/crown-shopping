/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: StagedProduct
// ====================================================

export interface StagedProduct_results_masterData_staged {
  __typename: "ProductData";
  skus: string[];
  name: string | null;
}

export interface StagedProduct_results_masterData {
  __typename: "ProductCatalogData";
  staged: StagedProduct_results_masterData_staged | null;
}

export interface StagedProduct_results {
  __typename: "Product";
  id: string;
  masterData: StagedProduct_results_masterData;
}

export interface StagedProduct {
  __typename: "ProductQueryResult";
  results: StagedProduct_results[];
}
