/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: me
// ====================================================

export interface me_me_customer {
  __typename: "Customer";
  id: string;
  firstName: string | null;
  lastName: string | null;
}

export interface me_me {
  __typename: "Me";
  customer: me_me_customer | null;
}

export interface me {
  /**
   * This field can only be used with an access token created with the password flow or with an anonymous session.
   * 
   * It gives access to the data that is specific to the customer or the anonymous session linked to the access token.
   */
  me: me_me;
}
