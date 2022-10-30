/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { InputProductsType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: addToOrders
// ====================================================


export interface addToOrders_addToOrders {
  __typename: "Orders";
  date: any | null;
}

export interface addToOrders {
  addToOrders: addToOrders_addToOrders | null;
}

export interface addToOrdersVariables {
  token: string;
  cost: number;
  products: (InputProductsType | null)[];
}
