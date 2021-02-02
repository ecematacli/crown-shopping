import { gql } from '@apollo/client';

export const GET_CATEGORY_ID = gql`
  query categoryId($where: String) {
    categories(where: $where, limit: 1) {
      results {
        id
      }
    }
  }
`;
