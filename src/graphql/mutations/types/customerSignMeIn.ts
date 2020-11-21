/* tslint:disable */
// This file was automatically generated and should not be edited.

import { CustomerSignMeInDraft } from './../../../types/graphql-global-types';

// ====================================================
// GraphQL mutation operation: customerSignMeIn
// ====================================================

export interface CustomerSignMeIn_customerSignMeIn_customer {
  __typename: 'Customer';
  id: string;
}

export interface CustomerSignMeIn_customerSignMeIn {
  __typename: 'CustomerSignInResult';
  customer: CustomerSignMeIn_customerSignMeIn_customer;
}

export interface CustomerSignMeIn {
  /**
   * Retrieves the authenticated customer (a customer that matches the given email/password pair).
   *
   * If used with an access token for Anonymous Sessions, all orders and carts
   * belonging to the `anonymousId` will be assigned to the newly created customer.
   *
   * * If the customer does not have a cart yet, the anonymous cart that was
   * modified most recently becomes the customer's cart.
   * * If the customer already has a cart, the most recently modified anonymous
   * cart will be handled according to the `AnonymousCartSignInMode`.
   *
   * If a cart is is returned as part of the `CustomerSignInResult`, it has been
   * recalculated (it will have up-to-date prices, taxes and discounts, and invalid
   * line items have been removed).
   */
  customerSignMeIn: CustomerSignMeIn_customerSignMeIn;
}

export interface CustomerSignMeInVariables {
  draft: CustomerSignMeInDraft;
}
