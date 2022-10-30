/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: VerifyAdmin
// ====================================================


export interface VerifyAdmin_getUserData {
  __typename: "User";
  type: boolean | null;
}

export interface VerifyAdmin {
  getUserData: VerifyAdmin_getUserData | null;
}

export interface VerifyAdminVariables {
  token: string;
}
