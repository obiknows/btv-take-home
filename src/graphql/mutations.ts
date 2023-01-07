/* tslint:disable */
/* eslint-disable */

export const createBlackOakTVUser = /* GraphQL */ `
  mutation CreateBlackOakTVUser($input: CreateBlackOakTVUserInput) {
    createBlackOakTVUser(input: $input) {
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

export const updateBlackOakTVUser = /* GraphQL */ `
  mutation UpdateBlackOakTVUser($input: UpdateBlackOakTVUserInput) {
    updateBlackOakTVUser(input: $input) {
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