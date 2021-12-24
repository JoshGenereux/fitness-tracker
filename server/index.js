const express = require('express')
const cors = require('cors')
const app = express();
app.use(express.json())
app.use(cors())
const ctrl = require('./controller.js')



app.listen(8000, ()=> console.log(`Running on port 8000`))