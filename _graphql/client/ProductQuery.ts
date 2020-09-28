/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProductQuery
// ====================================================

export interface ProductQuery_product_price {
  current_price: number;
  original_price: number | null;
  currency_code: string;
}

export interface ProductQuery_product_information {
  section_text: string | null;
  section_title: string | null;
}

export interface ProductQuery_product {
  id: string;
  name: string;
  image_key: string;
  price: ProductQuery_product_price;
  information: (ProductQuery_product_information | null)[] | null;
}

export interface ProductQuery {
  product: ProductQuery_product | null;
}

export interface ProductQueryVariables {
  id: string;
}
