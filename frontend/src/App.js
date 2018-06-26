import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

/* COMPONENTS */
import BookList from './components/BookList'
import AddBook from './components/AddBook'

/* APOLLO CLIENT */
const client = new ApolloClient({
	uri: 'http://localhost:6060/graphql'
})


class App extends Component {
  render() {
    return (
    	<ApolloProvider client={client}>
	      <div id="main">
	      	<h1>Personal Reading List.</h1>
	      	<BookList />
	      	<AddBook />
	      </div>
    	</ApolloProvider>
    )
  }
}

export default App
