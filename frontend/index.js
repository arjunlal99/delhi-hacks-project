var express = require('express')
var app = express()
app.set('view engine', 'pug')
app.use('/public',express.static(__dirname+"/public"))
const request = require('request')




app.get('/', (req,res) => {

    request('http://localhost:8001/api/channels' ,(error,response, body) => {
        console.log(body.success)
   // res.render('homepage', {docs: body.docs})
    })
})

app.get('/channel', (req,res) => {
    res.render('channel')
})


function getChannels(){
    return new Promise((resolve,reject) => {
        request('http://localhost:8001/api/channels', (err,response,body) => {
            console.log(response)
            if(err){
                return reject(err)
            }else{
                resolve(body)
            }
        })
    })
}


getChannels().then((docs) => console.log(docs)).catch(err => console.log(err))
//listener
var listener = app.listen(process.env.PORt || 8000, () => {
    console.log("Frontend listening at port ", listener.address().port)
})