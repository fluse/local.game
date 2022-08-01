const express = require('express')
const Gun = require('gun')

const app = express()
const port = 8080
app.use(Gun.serve)

const server = app.listen(port, () => {
    console.log("Listening at: http://localhost://" + port)
})

Gun({web: server})