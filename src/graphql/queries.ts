/* tslint:disable */
/* eslint-disable */

export const getBlackOakTVUser = /* GraphQL */ `
  query GetBlackOakTVUser($id: ID!) {
    getBlackOakTVUser(id: $id) {
      id
      fullname
      email
      defaultProfileID
      createdAt
      lastUpdate
      profile {
        id
        name
        userID
        userEmail
        profilePic {
          id
          url
          previewOwner
          previewCategory
          previewDimension
          titlePreference
        }
        boxArtPreference
        createdAt
        updatedAt
      }
    }
  }
`;

export const getBlackOakTVUserPlan = /* GraphQL */ `
  query GetBlackOakTVUserPlan($id: ID!, $email: String) {
    getBlackOakTVUserPlan(id: $id, email: $email) {
      id
      userID
      planID
      customerID
      provider
      hasHadTrial
      status
      nextPaymentDate
      trialing
    }
  }
`;