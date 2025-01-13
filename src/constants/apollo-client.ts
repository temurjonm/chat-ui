import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_URL } from "./urls";

const apolloClient = new ApolloClient({
  uri: `${API_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default apolloClient;
