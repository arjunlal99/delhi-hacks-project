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
    fulfilled: String,
    isSuggestion: Boolean

})
var requirementModel = conn.model('requirementModel', requirementSchema)

//var myObj = new requirementModel({channelID:5,description:'Booty on Fire',fulfilled: '80%',createdBy:'OG',isSuggestion:true})
function addObject(myObj){
    return new Promise((resolve, reject) =>{
        myObj.save(function(err,res){      
            if(err){
                return reject(err)
            }
            else{
                resolve(docs)
            }
        })
    })
}


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
/*getRequirememntsbyID(5).then((docs) =>{
    console.log(docs)
}).catch((err)=>{
    console.log(err)
})
*/

module.exports = {
    addObject,
    getAllRequirements,
    getAllRequirements,
    
}