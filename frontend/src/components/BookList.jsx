import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import { getBooksQuery } from '../queries/queries'


class BookList extends Component {

	showAllBooks = () => {
		let data = this.props.data
		if(data.loading) {
			return <div>LOADING BOOKS.</div>
		} else {
			return data.books.map(book => {
				return <li key={book.id}>{book.name}</li>
			})
		}
	}

	render() {
		return (
			<div>
				<ul id="booklist">
					{this.showAllBooks()}
				</ul>
			</div>
		)
	}
}

export default graphql(getBooksQuery)(BookList)