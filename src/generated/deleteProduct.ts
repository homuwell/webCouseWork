/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL mutation operation: deleteProduct
// ====================================================


export interface deleteProduct_deleteProduct_products {
  __typename: "ProductInBasket";
  productName: string | null;
}

export interface deleteProduct_deleteProduct {
  __typename: "Basket";
  products: (deleteProduct_deleteProduct_products | null)[] | null;
}

export interface deleteProduct {
  deleteProduct: deleteProduct_deleteProduct | null;
}

export interface deleteProductVariables {
  productName: string;
  token: string;
}
