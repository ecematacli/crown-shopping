/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categoryId
// ====================================================

export interface categoryId_categories_results {
  __typename: "Category";
  id: string;
}

export interface categoryId_categories {
  __typename: "CategoryQueryResult";
  results: categoryId_categories_results[];
}

export interface categoryId {
  categories: categoryId_categories;
}

export interface categoryIdVariables {
  where?: string | null;
}
