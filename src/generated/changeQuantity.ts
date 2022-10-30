/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL mutation operation: changeQuantity
// ====================================================


export interface changeQuantity_changeQuantity_products {
  __typename: "ProductInBasket";
  productName: string | null;
}

export interface changeQuantity_changeQuantity {
  __typename: "Basket";
  products: (changeQuantity_changeQuantity_products | null)[] | null;
}

export interface changeQuantity {
  changeQuantity: changeQuantity_changeQuantity | null;
}

export interface changeQuantityVariables {
  productName: string;
  quantity?: number | null;
  token?: string | null;
}
