const path = require('path')
const express = require('express')

const app = express()
const port = 3000

const cachingHeaders = {
  setHeaders: (res, path, stat) => {
    // matches static versioned files (main.a473212b.chunk.js)
    if (/\.[0-9a-f]{8}\./.test(path)) {
      res.setHeader('Cache-Control', 'max-age=31536000')
    } else {
      res.setHeader('Cache-Control', 'no-cache')
    }
  }
}

app.use(express.static(path.resolve(__dirname, 'build'), cachingHeaders))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
