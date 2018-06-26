/* EXPRESS SERVER */
const express = require('express')
			cors = require('cors')
      port = 6060 || process.argv[2]
      app = express()

app.use(cors())

/* MONGOOSE CONNECTION */
const mongoose = require('mongoose')

mongoose.connect('mongodb://ant:ant182@ds117111.mlab.com:17111/graphql-books')
mongoose.connection.once('open', () => {
	console.log('Connected to DB')
})


/* GRAPHGQL SCHEMA AND GRAPHIQL GUI */
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))


app.listen(port, () => {
  console.log('Listening on 6060.')
})