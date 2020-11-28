import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query products($locale: Locale!, $where: String) {
    products {
      ...StagedProduct
      ...CurrentProduct
    }
  }
  fragment Product on ProductData {
    skus
    name(locale: $locale)
  }
  fragment StagedProduct on ProductQueryResult {
    results {
      id
      masterData {
        staged {
          ...Product
        }
      }
    }
  }
  fragment CurrentProduct on ProductQueryResult {
    results {
      id
      masterData {
        current {
          ...Product
        }
      }
    }
  }
`;
