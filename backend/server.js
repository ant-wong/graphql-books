const express = require('express')
      port = 6060 || process.argv[2]
      app = express()


app.listen(port, () => {
  console.log('Listening on 6060.')
})