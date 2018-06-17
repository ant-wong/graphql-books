const express = require('express')
      port = 6060 || process.argv[2]
      app = express()

const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')

app.use('/graphql', graphqlHTTP({
  schema
}))


app.listen(port, () => {
  console.log('Listening on 6060.')
})