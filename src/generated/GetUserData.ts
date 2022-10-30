/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: GetUserData
// ====================================================


export interface GetUserData_getUserData {
  __typename: "User";
  login: string | null;
  email: string | null;
  name: string | null;
  surname: string | null;
  phoneNumber: string | null;
  type: boolean | null;
}

export interface GetUserData {
  getUserData: GetUserData_getUserData | null;
}

export interface GetUserDataVariables {
  token: string;
}
