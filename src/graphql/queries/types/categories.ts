/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categories
// ====================================================

export interface categories_categories_results_children {
  __typename: "Category";
  id: string;
  slug: string | null;
}

export interface categories_categories_results {
  __typename: "Category";
  id: string;
  slug: string | null;
  /**
   * Direct child categories.
   */
  children: categories_categories_results_children[] | null;
}

export interface categories_categories {
  __typename: "CategoryQueryResult";
  results: categories_categories_results[];
}

export interface categories {
  categories: categories_categories;
}

export interface categoriesVariables {
  locale: any;
  where?: string | null;
}
