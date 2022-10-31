import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
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
    <ApolloProvider data-testid='apollo-provider' client={client}>
      <Home data-testid='homepage' />
    </ApolloProvider>
    )
}

export default App;
