var mongoose = require('mongoose')
require('dotenv').config({path : '../.env'})

//initialize connection

var conn = mongoose.createConnection(process.env.DB_URI,{useNewUrlParser: true ,useUnifiedTopology: true})
conn.once('open', () => {
    console.log(' Requirement Connection Created Successfully')
})

var Schema = mongoose.Schema

var requirementSchema = new Schema({
    channelID: String,
    description: String,
    createdBy: String,
    Fulfilled: Number,
    isSuggestion: Boolean

})

var requirementModel = conn.model('requirementModel', requirementSchema)
//retieve array of all requirements
function getAllRequirements(){
    return new Promise((resolve,reject) => {
        requirementModel.find((err, docs) => {
            if (err){
                return reject(err)
            }else{
                resolve(docs)
            }
        })
    })
}

//retrieve requirememnts wrt channelID
function getRequirememntsbyID(channelID){
    return new Promise((resolve,reject) => {
        requirementModel.find({channelID:channelID},(err, docs) => {
            if (err){
                return reject(err)
            }else{
                resolve(docs)
            }
        })
    })

}
