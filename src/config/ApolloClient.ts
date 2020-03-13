import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';
import { AppConfig } from './AppConfig';

const cache: any = new InMemoryCache();
//   {
//   dataIdFromObject: o => o.id
// }

const link: any = createUploadLink({
  uri: AppConfig.GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client: any = new ApolloClient({
  cache,
  link: authLink.concat(link),
  assumeImmutableResults: true,
});
