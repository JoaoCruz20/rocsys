import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { graphql } from 'graphql';
import Home from "../src/pages/home";



const link = from([
  new HttpLink({uri: "https://probable-egret-57.hasura.app/v1/graphql"})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
    )
}

export default App;
