/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categories
// ====================================================

export interface Categories_categories_results {
  __typename: 'Category';
  id: string;
  slug: string | null;
}

export interface Categories_categories {
  __typename: 'CategoryQueryResult';
  results: Categories_categories_results[];
}

export interface categories {
  categories: Categories_categories;
}

export interface CategoriesVariables {
  locale: any;
  where?: string | null;
}
