import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { setContext } from 'apollo-link-context';

import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.scss';

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
    }
  };
});

console.log(process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN);

const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink)
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
