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
    //Fulfilled: Number,
    isSuggestion: Boolean

})

var myObj = {channelID:1,decription:'Local Fire',createdBy:'OG',isSuggestion:true}
requirementModel.insertOne(myObj,function(err,res){
    if(err){console.log(err)
    }
    else{
        console.log('inserted!!')
    }
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

getAllRequirements().then((docs) =>{
    console.log(docs)
}).catch((err)=>{
    console.log(err)
})

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
