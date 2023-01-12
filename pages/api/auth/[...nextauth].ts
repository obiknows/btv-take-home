import NextAuth from "next-auth";
import { DgraphAdapter } from "@next-auth/dgraph-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  // PROVIDERS
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Sign in w/ BlackOak",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Please enter a username",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "Test User", email: "test@blackoak.tv" };

        if (credentials.username === "admin") {
          console.log("logging in as user", user);

          return user;
        }

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  // DATABASES
  adapter: DgraphAdapter({
    endpoint: process.env.DGRAPH_GRAPHQL_ENDPOINT,
    authToken: process.env.DGRAPH_GRAPHQL_KEY,
  }),
});
