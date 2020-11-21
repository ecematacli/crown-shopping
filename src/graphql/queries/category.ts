import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query categories($locale: Locale!, $where: String) {
    categories(where: $where) {
      results {
        id
        slug(locale: $locale)
      }
    }
  }
`;
