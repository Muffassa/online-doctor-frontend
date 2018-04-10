import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'semantic-ui-css/semantic.min.css';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

import Router from './routes';

const serverURL = 'localhost:8081';

const wsLink = new WebSocketLink({
  uri: `ws://${serverURL}/subscriptions`,
  options: {
    reconnect: true,
  },
});

const httpLink = new HttpLink({ uri: `http://${serverURL}/graphql`, credentials: 'include' });

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);
