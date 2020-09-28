/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListQuery
// ====================================================

export interface ListQuery_productList_price {
  current_price: number;
  original_price: number | null;
  currency_code: string;
}

export interface ListQuery_productList {
  id: string;
  name: string;
  image_key: string;
  price: ListQuery_productList_price;
  offer_ids: string[] | null;
}

export interface ListQuery {
  productList: ListQuery_productList[];
}
