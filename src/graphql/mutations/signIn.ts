import { gql } from '@apollo/client'

export const SIGN_IN = gql`
  mutation customerSignMeIn($draft: CustomerSignMeInDraft!) {
    customerSignMeIn(draft: $draft) {
      customer {
        id
      }
    }
  }
`
