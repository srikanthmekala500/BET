const express = require('express')
const app = express()
const port = process.env.PORT 
const dotenv = require('dotenv').config()
const color  = require("colors")
const connectdb = require('./db/db')
const body_parser = require('body-parser')
const cors = require('cors')
const path = require('path')
app.use(express.json())
app.use(cors())
app.use(body_parser.json())

connectdb()
 

 

app.use('/api/v1/user',require('./routers/usertouter'))

// static file
 

app.use(express.static(path.join(__dirname, "./bet/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./bet/build/index.html"));
});

app.listen(port,()=>{
    console.log(`Server Running On PORT ${port} on ${process.env.NODE_ENV} Mode `
    .bgMagenta.white
    )
})
