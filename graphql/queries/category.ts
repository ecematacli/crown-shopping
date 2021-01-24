import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query categories($locale: Locale!, $where: String) {
    categories(where: $where) {
      results {
        ...CategoryMenuInfo
        children {
          ...CategoryMenuInfo
          children {
            ...CategoryMenuInfo
          }
        }
      }
    }
  }
  fragment CategoryMenuInfo on Category {
    id
    name(locale: $locale)
    slug(locale: $locale)
  }
`;
