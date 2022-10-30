/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: AuthenticateUser
// ====================================================


export interface AuthenticateUser_authenticateUser {
  __typename: "User";
  id: string | null;
}

export interface AuthenticateUser {
  authenticateUser: AuthenticateUser_authenticateUser | null;
}

export interface AuthenticateUserVariables {
  token: string;
}
