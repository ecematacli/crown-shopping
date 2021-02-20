import { gql } from '@apollo/client';

export const ME = gql`
  query me {
    me {
      customer {
        id
        firstName
        lastName
      }
    }
  }
`;
