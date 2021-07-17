import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

import AllProducts from './pages/products';


const client = new ApolloClient({
  uri: 'http://api.monappli.local/',
  cache: new InMemoryCache()
});




function App() {
  return (
    <div>
      <h2>Mon application </h2>
      <AllProducts />
      
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);