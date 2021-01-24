import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation customerSignMeIn($draft: CustomerSignMeInDraft!) {
    customerSignMeIn(draft: $draft) {
      customer {
        id
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation customerSignMeUp($draft: CustomerSignMeUpDraft!) {
    customerSignMeUp(draft: $draft) {
      customer {
        id
      }
    }
  }
`;
