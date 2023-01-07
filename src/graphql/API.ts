/* tslint:disable */
/* eslint-disable */

export enum BillingServiceProvider {
  STRIPE = "STRIPE",
  GOOGLE = "GOOGLE",
  APPLE = "APPLE",
  PAYPAL = "PAYPAL",
  ROKU = "ROKU",
  AMAZON = "AMAZON",
}

export enum PreviewCategory {
  SHOW = "SHOW",
  VIDEO = "VIDEO",
  CATALOG_VIDEO = "CATALOG_VIDEO",
  FEATURED_CATEGORY_VIDEO = "FEATURED_CATEGORY_VIDEO",
  AUTHOR = "AUTHOR",
  SUB = "SUB",
  STRONG_LEAD = "STRONG_LEAD",
  ALL_CAST = "ALL_CAST",
  ABSTRACT = "ABSTRACT",
  FRAME_SHOT = "FRAME_SHOT",
  FEATURED_CATEGORY_SHOW = "FEATURED_CATEGORY_SHOW",
}

export enum PreviewDimension {
  LANDSCAPE = "LANDSCAPE",
  PORTRAIT = "PORTRAIT",
  CUSTOM_SQUARE = "CUSTOM_SQUARE",
  CUSTOM_TOP_10 = "CUSTOM_TOP_10",
}

export enum PreviewTitlePreference {
  WITH_TITLE = "WITH_TITLE",
  WITHOUT_TITLE = "WITHOUT_TITLE",
}

export enum SubscriptionPlanStatus {
  CANCELLED = "CANCELLED",
  EXPIRED = "EXPIRED",
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
  FAILED = "FAILED",
  UNKNOWN = "UNKNOWN",
}

export type CreateBlackOakTVUserInput = {
  id: string,
  fullname: string,
  email: string,
  defaultProfile: string,
  createdAt: string,
  lastUpdate?: string | null,
};

export type UpdateBlackOakTVUserInput = {
  id: string,
  lastUpdate: string,
  fullname?: string | null,
  email?: string | null,
  defaultProfile?: string | null,
};

export type BlackOakTVUser = {
  __typename: "BlackOakTVUser",
  id: string,
  fullname: string,
  email: string,
  defaultProfileID: string,
  createdAt: string,
  lastUpdate: string,
  profile?: BlackOakTVUserProfile | null,
};

export type BlackOakTVUserProfile = {
  __typename: "BlackOakTVUserProfile",
  id: string,
  name: string,
  userID: string,
  userEmail: string,
  profilePic?: Preview | null,
  boxArtPreference?: Array< PreviewCategory | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type BlackOakTVUserSubscription = {
  __typename: "BlackOakTVUserSubscription",
  id: string,
  userID: string,
  planID: string,
  customerID: string,
  provider: BillingServiceProvider,
  hasHadTrial: boolean,
  status: SubscriptionPlanStatus,
  nextPaymentDate: string,
  trialing?: boolean | null,
};

export type Preview = {
  __typename: "Preview",
  id: string,
  url: string,
  previewOwner?: string | null,
  previewCategory?: string | null,
  previewDimension?: PreviewDimension | null,
  titlePreference?: PreviewTitlePreference | null,
};