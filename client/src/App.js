import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

import './App.css';

import Login from './components/Login';
import Register from './components/Register';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        users: {
          merge(existing, incoming) { 
            return incoming
          }
        }
      }
    }
  }
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Register />
        <Login />
      </div>
    </ApolloProvider>
  );
}

export default App;
