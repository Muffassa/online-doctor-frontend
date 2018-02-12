import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'semantic-ui-css/semantic.min.css';

import Router from './routes';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8081/graphql', credentials: 'include' }),
  cache: new InMemoryCache(),
});

export default () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);
