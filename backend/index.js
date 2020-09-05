var express = require('express')
var app = express()
require('dotenv').config()
var requirement = require('./models/requirement.js')
var channel = require('./models/channel.js')


//endpoint for getting all channels
app.get('/api/channels', (req,res)=> {

})


//endpoint for getting specific channel by id
app.get('/api/channels/:_id', (req,res) => {

})

//endpoint for requirements by channel id
app.get('/api/requirements/:channel_id', (req,res) => {


})


//endpoint fo getting specific requirement by id
app.get('/api/requirement/:_id', (req,res) => {


})


//listener

var listener = app.listen(process.env.PORT || 8001, () => {
    console.log("backend listening at ", listener.address().port)
})
