const express = require('express')
const app = express()
const configureDb = require('./config/database')
configureDb()
const router = require('./config/routes')
const port = 3050

app.use(express.json())
app.use('/', router)

app.listen(port, () => {
    console.log('istening on port', port)
})
