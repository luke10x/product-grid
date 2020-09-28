/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OfferType } from "./../global";

// ====================================================
// GraphQL query operation: UserQuery
// ====================================================

export interface UserQuery_user_offers {
  id: string;
  type: OfferType;
}

export interface UserQuery_user {
  available_badges: string;
  offers: UserQuery_user_offers[] | null;
}

export interface UserQuery {
  user: UserQuery_user | null;
}

export interface UserQueryVariables {
  userId: string;
}
