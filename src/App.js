import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Doctors from './Doctors';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8081/graphql' }),
  cache: new InMemoryCache(),
});

export default () => (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/doctors" component={Doctors} />
      </div>
    </Router>
  </ApolloProvider>
);
