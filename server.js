const fallback = require('express-history-api-fallback')
const express = require('express')
const app = express()
const root = `${__dirname}/dist`
app.use(express.static(root))
app.use(fallback('index.html', { root }))

console.log('port on [$s]', 3000)
app.listen(3000)
