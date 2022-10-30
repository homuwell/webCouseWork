/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL mutation operation: LoginUser
// ====================================================


export interface LoginUser_LoginUser {
  __typename: "User";
  token: string | null;
  login: string | null;
}

export interface LoginUser {
  LoginUser: LoginUser_LoginUser | null;
}

export interface LoginUserVariables {
  login: string;
  password: string;
}
