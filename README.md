# BlackOakTV Take Home

This is a simple NextJS TS App with backend. Your task will be to first get a good grasp on this skeleton and then build on top of it.

You will given 3-5 days to complete the task after which there will be a sitdown to discuss implementation and design decisions. The project is not expected to be fully functional at the time of turn in, but see requirements below.

## Task
BlackOakTV is looking to grow its subscriber base by adding a virality feature. We will now allow users to generate referral tokens or links. For every new subscriber that uses the token or link, they will receive a 25% discount towards the new user signup while the referring user will receive a pay out $5.

You are required to architect and build a referral system, where authenticated users can create a token or generate a link that can be shared with friends and family.

#### Minimum Requirements
Naturally, we would like to see your creativity and what you can come up with, but for the sake of clarity, we expect at the minimum that your app can do the following.
- UI Page to generate token or link
- UI Page to claim referral using link or entering token directly
- A minimal Sign up and sign in experience to properly demo this.

The further you take this, the better!
#### Submission
I recommend forking this and submissions should be made as a PR against this branch.

## Technologies
- **Client**: NextJS for the web app
- **Data Model and Store**: GraphQL
- **Backend**: Serveless, we have some sample implementations with py and nodejs, but do whatever pleases you, just come ready to walk us through if needed.

## Structure
- **/ BTV-TAKE-HOME**<br><br>
  - **/ backend** -  The backend folder contains the present apis - graphql (blackoaktv) & rest (AwesomeRestAPI), as well as lambda functions that power the said apis. They serve as examples or precedence to help you when working on your own implementation. <br><br>

    - **/ api** - This folder contains the blackoaktv graphql api, and an example rest api to serve as a precedence
      - **/ blackoaktv** - GraphQL API. More details in blackoaktv/README.md
      - **/ AwesomeRestAPI** - REST API. More details in AwesomeRestAPI/README.md<br><br>
    - **/ function** - This folder contains 3 function implementations. IdentityBlackOakTVAppSyncResolver & ContentAccessGatekeeperAppSyncResolver as their name suggests are resolvers for some of the graphql (blackoaktv) queries and implementation. You can find the connection from looking through the blackaoktv/schema.graphql. While AwesomeRestAPIGatewayRestResolver resolves the rest api (AwesomeRestAPI)
      - **/AwesomeRestAPIGatewayRestResolver**
      - **/ContentAccessGatekeeperAppSyncResolver**
      - **/IdentityBlackOakTVAppSyncResolver**<br><br>
  - **/ components** - reusable nextjs components <br><br>
  - **/ pages** - NextJS Routing folder, see - https://nextjs.org/docs/routing/introduction for more details<br><br>
  - **/src** - Contains some API related types and queries based on the graphql api
    - **/graphql** - mutations.ts, queries.ts, subscriptions.ts are all based on the current schema.graphql. Any changes to schema.graphql should be reflected here accordingly. API.ts contains types you can reuse within the app, also based on the current schema.graphql and changes to said file should be reflected here as well.<br><br>

  - **/utils** - randoms
    - **/customQueries** - shows some precendence on how to write custom graphql queries as you see fit while you're building.

## Hint Hint
- No need to build a complex auth system here, you can build something rather static in its logic.
- GraphQL types automatically create dynamoDB tables.
- You should be adding or extending the existing GraphQL and/or Rest APIs to best achieve your implementation
- You should be touching existing or adding new Lambda(s) implementation to cover above
- A couple of client side UIs needs to be developed
- When we meet to discuss the implementation, we will also be adding a new feature in real time.

