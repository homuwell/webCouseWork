/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: GetProduct
// ====================================================


export interface GetProduct_getProduct {
  __typename: "Product";
  name: string | null;
  category: string | null;
  description: string | null;
  cost: number | null;
  quantity: number | null;
  image: string | null;
}

export interface GetProduct {
  getProduct: GetProduct_getProduct | null;
}

export interface GetProductVariables {
  id: string;
}
