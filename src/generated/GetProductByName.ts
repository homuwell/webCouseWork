/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: GetProductByName
// ====================================================


export interface GetProductByName_getProductByName {
  __typename: "Product";
  _id: string | null;
  name: string | null;
  category: string | null;
  description: string | null;
  cost: number | null;
  quantity: number | null;
  image: string | null;
}

export interface GetProductByName {
  getProductByName: GetProductByName_getProductByName | null;
}

export interface GetProductByNameVariables {
  name: string;
}
