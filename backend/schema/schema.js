const graphql = require('graphql')
const _ = require('lodash')

const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} = graphql

/* TEST DATA */
const books = [
  { name: 'This is my book', genre: 'fantasy', id: '1', authorId: '1'},
  { name: 'This is my other book', genre: 'horror', id: '2', authorId: '2'},
  { name: 'This is my look', genre: 'thriller', id: '3', authorId: '3'}
]

const authors = [
  { name: 'ant wong', age: 14, id: '1'},
  { name: 'nic tamura', age: 88, id: '2'},
  { name: 'basil the cat', age: 3, id: '3'}
]

/* BOOK SCHEMA */
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        console.log(parent)
        return _.find(authors, { id: parent.authorId })
      }
    }
  })
})

/* AUTHOR SCHEMA */
const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
})


/* HOW TO QUERY SPECIFIC DATA */
const RootQuery =  new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { 
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db
        return _.find(books, { id: args.id })
      }
    },
    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        return _.find(authors, { id: args.id })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})