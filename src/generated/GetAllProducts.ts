/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: GetAllProducts
// ====================================================


export interface GetAllProducts_getProducts {
  __typename: "Product";
  name: string | null;
  image: string | null;
  _id: string | null;
  cost: number | null;
}

export interface GetAllProducts {
  getProducts: (GetAllProducts_getProducts | null)[] | null;
}
