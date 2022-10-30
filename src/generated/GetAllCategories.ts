/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: GetAllCategories
// ====================================================


export interface GetAllCategories_getCategories {
  __typename: "Category";
  id: string | null;
  name: string | null;
}

export interface GetAllCategories {
  getCategories: (GetAllCategories_getCategories | null)[] | null;
}
