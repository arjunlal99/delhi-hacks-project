var express = require('express')
var app = express()
require('dotenv').config()
var requirement = require('./models/requirement.js')
var channel = require('./models/channel.js')


//endpoint for getting array of all channels
app.get('/api/channels', (req,res)=> {
    channel.getChannels().then((docs) => {
        res.json({success: true, docs: docs})
    }).catch((err) => {
        res.json({success: false, message: err})
    })

})


//endpoint for getting specific channel by id
app.get('/api/channels/:_id', (req,res) => {
    channel.getChannelById(req.params._id).then((docs) => {
        res.json({success: true, docs: docs})
    }).catch((err) => {
        res.json({success: false, message: err})
    })
})


//endpoint for requirements by channel id
app.get('/api/requirements/:channelID', (req,res) => {
    requirement.getRequirementsbyID(req.params.channelID).then((docs) =>{
        res.json({success: true,requirements: docs})
    }).catch((err) =>{
        res.json({success: false,message: err})
    })

})

/*requirement.addObject('6',"Sample","90%","Befin",true).then((docs) =>{
    console.log({success: true,requirements: docs})
}).catch((err) =>{
    console.log({success: false,message: err})
})
*/

//test getAllRequirements
app.get('/api/requirement/', (req,res) => {
requirement.getAllRequirements().then((docs) => {
        res.json({success: true,requirement: docs })
}).catch((err) =>{
    res.json({success: false,message: err})
})
})


//endpoint fo getting specific requirement by requirement id
app.get('/api/requirement/:_id', (req,res) => {
requirement.getByRequirementID(req.params._id).then((docs) => {
        res.json({success: true,requirement: docs })
}).catch((err) =>{
    res.json({success: false,message: err})
})

})


//listener

var listener = app.listen(process.env.PORT || 8001, () => {
    console.log("backend listening at ", listener.address().port)
})
