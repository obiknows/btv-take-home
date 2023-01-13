/* tslint:disable */
/* eslint-disable */

export const onNewUserCreationComplete = /* GraphQL */ `
  subscription OnNewUserCreationComplete($userEmail: String!) {
    onNewUserCreationComplete(userEmail: $userEmail) {
      id
      name
      userID
      userEmail
      referrer # points to the referalID of another user
      referralId # users OWN referralID, some subset of
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
