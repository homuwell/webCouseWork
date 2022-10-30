/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL mutation operation: addToBasket
// ====================================================


export interface addToBasket_addToBasket_products {
  __typename: "ProductInBasket";
  productName: string | null;
}

export interface addToBasket_addToBasket {
  __typename: "Basket";
  products: (addToBasket_addToBasket_products | null)[] | null;
}

export interface addToBasket {
  addToBasket: addToBasket_addToBasket | null;
}

export interface addToBasketVariables {
  token: string;
  productId: string;
}
