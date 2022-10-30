/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: GetProductsByCategory
// ====================================================


export interface GetProductsByCategory_getProducts {
  __typename: "Product";
  name: string | null;
  image: string | null;
  _id: string | null;
  cost: number | null;
}

export interface GetProductsByCategory {
  getProducts: (GetProductsByCategory_getProducts | null)[] | null;
}

export interface GetProductsByCategoryVariables {
  category?: string | null;
}
