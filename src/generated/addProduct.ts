/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL mutation operation: addProduct
// ====================================================


export interface addProduct_addProduct {
  __typename: "Product";
  _id: string | null;
}

export interface addProduct {
  addProduct: addProduct_addProduct | null;
}

export interface addProductVariables {
  name: string;
  category: string;
  description: string;
  cost: number;
  quantity: number;
  image: any;
}
