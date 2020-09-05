var express = require('express')
var app = express()
require('dotenv').config()





//listener

var listener = app.listen(process.env.PORT || 8001, () => {
    console.log("backend listening at ", listener.address().port)
})
