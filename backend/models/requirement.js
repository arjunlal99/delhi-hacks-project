var mangoose = require('mangoose')
require('dotenv').config({path : ../.env})

//initialize connection

var conn = mangoose.createConnection(process.env.DB_URI,{useNewUrlParser: true ,useUnifiedTopology: true})
conn.once('open', () => {
    console.log(' Requirement Connection Created Successfully')
})

var Schema = mangoose.Schema

var requirementSchema = new Schema({
    description: String,
    createdBy: String,
    Fulfilled: Number,
    isSuggestion: true

})