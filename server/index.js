const express = require('express')
const cors = require('cors')
const app = express();
app.use(express.json())
app.use(cors())
const ctrl = require('./controller.js')
const {SERVER_PORT} = process.env


app.post('/live-fitness', ctrl.testRun)

app.listen(SERVER_PORT, ()=> console.log(`Running on port ${SERVER_PORT}`))