var mongoose = require('mongoose')

require('dotenv').config({path : '../.env'})

//initialize connection

var conn = mongoose.createConnection(process.env.DB_URI,{useNewUrlParser: true ,useUnifiedTopology: true})
conn.once('open', () => {
    console.log(' Channel Connection Created Successfully')
    //addChannel('emergency','this is just a description', 'Arjun', ['f2fs','2f2f'])
   //getChannels().then(docs => console.log(docs)).catch(err => console.log(err))
})


var Schema = mongoose.Schema

var channelSchema = new Schema({
    name: String,
    description: String,
    admin: String,
    requirements: Array
})

var channelModel = conn.model('channels', channelSchema)

function addChannel(name, description, admin, requirements){
    var channel_instance = new channelModel({
    name: name,
    description: description,
    admin: admin,
    requirements: requirements
    })

    channel_instance.save((err,docs) => {
        if (err){
            console.log(err)
        }else{
            console.log(docs)
        }
    })
}


function getChannels(){
    return new Promise((resolve,reject) => {
        channelModel.find((err,docs) => {
            if(err){
                return reject(err)
            }else{
                resolve(docs)
            }
        })
    })
}

function getChannelById(id){
    return new Promise((resolve,reject) => {
        channelModel.find({_id: id},(err,docs) => {
            if(err){
                return reject(err)
            }else{
                resolve(docs)
            }
        })
    })
}



module.exports ={
    channelSchema,
    addChannel,
    getChannels,
    getChannelById
}