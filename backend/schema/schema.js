const graphql = require('graphql')
const _ = require('lodash')

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql

/* TEST DATA */
const books = [
  { name: 'This is my book', id: 1},
  { name: 'This is my other book', id: 2},
  { name: 'This is my look', id: 3}
]

/* BOOK SCHEMA */
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
})


/* HOW TO QUERY SPECIFIC DATA */
const RootQuery =  new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { 
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        // code to get data from db
        return _find(books, { id: args.id })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})