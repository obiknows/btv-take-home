/* tslint:disable */
/* eslint-disable */

export const onNewUserCreationComplete = /* GraphQL */ `
  subscription OnNewUserCreationComplete($userEmail: String!) {
    onNewUserCreationComplete(userEmail: $userEmail) {
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
`;