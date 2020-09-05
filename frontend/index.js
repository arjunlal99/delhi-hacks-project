var express = require('express')
var app = express()
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res) => {
    res.render('homepage')
})

app.get('/channel', (req,res) => {
    res.render('channel')
})

//listener
var listener = app.listen(process.env.PORt || 9000, () => {
    console.log("Frontend listening at port ", listener.address().port)
})