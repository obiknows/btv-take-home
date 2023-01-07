export const SampleCombinedQuery = /* GraphQL */ `
  query SampleCombinedQuery($id: ID!, $email: String!) {
    getBlackOakTVUser(id: $id) {
      id
      fullname
      email
    }
    getBlackOakTVUserPlan(id: $id, email: $email) {
      planID
      customerID
      provider
      status
      nextPaymentDate
      trialing
    }
  }
`

export const SubscriptionQuery = /* GraphQL */ `
  query SubscriptionQuery($id: ID!, $email: String!) {
    getBlackOakTVUserPlan(id: $id, email: $email) {
      planID
      customerID
      provider
      status
      nextPaymentDate
      trialing
    }
  }
`

export const UserQuery = /* GraphQL */ `
  query UserQuery($id: ID!) {
    getBlackOakTVUser(id: $id) {
      id
      fullname
    }
  }
`