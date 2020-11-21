/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AnonymousCartSignInMode {
  MergeWithExistingCustomerCart = "MergeWithExistingCustomerCart",
  UseAsNewActiveCustomerCart = "UseAsNewActiveCustomerCart",
}

export interface AddressInput {
  id?: string | null;
  title?: string | null;
  salutation?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  streetName?: string | null;
  streetNumber?: string | null;
  additionalStreetInfo?: string | null;
  postalCode?: string | null;
  city?: string | null;
  region?: string | null;
  state?: string | null;
  country: any;
  company?: string | null;
  department?: string | null;
  building?: string | null;
  apartment?: string | null;
  pOBox?: string | null;
  phone?: string | null;
  mobile?: string | null;
  email?: string | null;
  fax?: string | null;
  additionalAddressInfo?: string | null;
  key?: string | null;
}

export interface CustomFieldInput {
  name: string;
  value: string;
}

export interface CustomFieldsDraft {
  typeId?: string | null;
  typeKey?: string | null;
  type?: ResourceIdentifierInput | null;
  fields?: CustomFieldInput[] | null;
}

export interface CustomerSignMeInDraft {
  email: string;
  password: string;
  activeCartSignInMode?: AnonymousCartSignInMode | null;
  updateProductData?: boolean | null;
}

export interface CustomerSignMeUpDraft {
  email: string;
  password: string;
  firstName?: string | null;
  lastName?: string | null;
  middleName?: string | null;
  title?: string | null;
  dateOfBirth?: any | null;
  companyName?: string | null;
  vatId?: string | null;
  addresses?: AddressInput[] | null;
  defaultBillingAddress?: number | null;
  defaultShippingAddress?: number | null;
  shippingAddresses?: number[] | null;
  billingAddresses?: number[] | null;
  custom?: CustomFieldsDraft | null;
  locale?: any | null;
  salutation?: string | null;
  key?: string | null;
}

export interface ResourceIdentifierInput {
  typeId?: string | null;
  id?: string | null;
  key?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
