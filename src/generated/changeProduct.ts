/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL mutation operation: changeProduct
// ====================================================


export interface changeProduct_changeProduct {
  __typename: "Product";
  name: string | null;
}

export interface changeProduct {
  changeProduct: changeProduct_changeProduct | null;
}

export interface changeProductVariables {
  id: string;
  name?: string | null;
  category?: string | null;
  description?: string | null;
  cost?: number | null;
  quantity?: number | null;
  image?: any | null;
}
