/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: GetUserBasket
// ====================================================


export interface GetUserBasket_getUserBasket_products {
  __typename: "ProductInBasket";
  productName: string | null;
  quantity: number | null;
  cost: number | null;
}

export interface GetUserBasket_getUserBasket {
  __typename: "Basket";
  products: (GetUserBasket_getUserBasket_products | null)[] | null;
}

export interface GetUserBasket {
  getUserBasket: GetUserBasket_getUserBasket | null;
}

export interface GetUserBasketVariables {
  token: string;
}
