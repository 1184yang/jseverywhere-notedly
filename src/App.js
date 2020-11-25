import React from 'react'
import { render } from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from 'apollo-link-context'
import  GlobalStyle from './components/GlobalStyle'
import Pages from './pages'

const uri = process.env.API_URI
const httpLink = createHttpLink({ uri })
const cache = new InMemoryCache()
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${localStorage.getItem('token')}` || ''
    }
  };
})
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true
})

const data = {
  isLoggedIn: !!localStorage.getItem('token')
}

cache.writeData({ data })

client.onResetStore(() => {
  cache.writeData({ data })
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  )
}

render(<App />, document.getElementById('root'));