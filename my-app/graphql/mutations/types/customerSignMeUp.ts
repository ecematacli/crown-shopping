/* tslint:disable */
// This file was automatically generated and should not be edited.

import { CustomerSignMeUpDraft } from "./../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: customerSignMeUp
// ====================================================

export interface customerSignMeUp_customerSignMeUp_customer {
  __typename: "Customer";
  id: string;
}

export interface customerSignMeUp_customerSignMeUp {
  __typename: "CustomerSignInResult";
  customer: customerSignMeUp_customerSignMeUp_customer;
}

export interface customerSignMeUp {
  /**
   * If used with an access token for Anonymous Sessions, all orders and carts
   * belonging to the anonymousId will be assigned to the newly created customer.
   */
  customerSignMeUp: customerSignMeUp_customerSignMeUp;
}

export interface customerSignMeUpVariables {
  draft: CustomerSignMeUpDraft;
}
