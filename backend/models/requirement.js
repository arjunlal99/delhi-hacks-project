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
    fulfilled: Boolean,
    isSuggestion: Boolean

})
var requirementModel = conn.model('requirementModel', requirementSchema)

//var myObj = new requirementModel({channelID:5,description:'Booty on Fire',fulfilled: '80%',createdBy:'OG',isSuggestion:true})
function addObject(channelID,description,fulfilled,createdBy,isSuggestion){
    return new Promise((resolve, reject) =>{
        var myObj = new requirementModel({channelID:channelID,description:description,fulfilled: fulfilled,createdBy:createdBy,isSuggestion:isSuggestion})
        myObj.save(function(err,res){      
            if(err){
                return reject(err)
            }
            else{
                resolve(res)
            }
        })
    })
}
/*
addObject("5f54810d09ae174ed79f8c66","Manual Labour",false,"Arjun",false).then((docs) =>{
    console.log(docs)
}).catch((err)=>{
    console.log(err)
})
addObject("5f54810d09ae174ed79f8c66","JCB",false,"Arjun",false).then((docs) =>{
    console.log(docs)
}).catch((err)=>{
    console.log(err)
})
addObject("5f54810d09ae174ed79f8c66","Ambulance",false,"Arjun",false).then((docs) =>{
    console.log(docs)
}).catch((err)=>{
    console.log(err)
})

addObject("5f54810d09ae174ed79f8c65","Water Bottles",false,"Arjun",false).then((docs) =>{
    console.log(docs)
}).catch((err)=>{
    console.log(err)
})
addObject("5f54810d09ae174ed79f8c65","Blanket",false,"Arjun",false).then((docs) =>{
    console.log(docs)
}).catch((err)=>{
    console.log(err)
})
addObject("5f54810d09ae174ed79f8c65","Biscuit",false,"Arjun",false).then((docs) =>{
    console.log(docs)
}).catch((err)=>{
    console.log(err)
})
*/
function getByRequirementID(_id){
    return new Promise((resolve, reject) => {
        requirementModel.find({_id:_id}, (err, docs) => {
            if(err){
                return reject(err)
            }else{
                resolve(docs)
            }
        })
    })
}
//retieve array of all requirements
function getAllRequirements(){
    return new Promise((resolve,reject) => {
        requirementModel.find((err, docs) => {
            if(err){
                return reject(err)
            }else{
                
                resolve(docs)
            }
        })
    })
}



//retrieve requirememnts wrt channelID
function getRequirementsbyID(channelID){
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
    getRequirementsbyID,
    getByRequirementID
    
}