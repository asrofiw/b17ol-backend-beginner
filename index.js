const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// GET Path '/home' yang menampilkan respon "Welcome to my first backend!"
app.get('/home', (req, res) => {
    res.send('Welcome to my first backend!')
})

// POST Path '/data' yang akan menampilkan data yang dikirim ke "console.log"
app.use(bodyParser.urlencoded({ exetended: true}))
app.use(bodyParser.json())
app.post('/data', (req, res) => {
    console.log('Got body: ', req.body)
    res.sendStatus(200)
})

// revisi
app.get('/home', (req,res) => {
    res.send("Welcome to my first backend!")
})

app.post('/data', (req,res) => {
    console.log(req.body)
    res.send('OK')
})

app.post('/profile', (req,res) => {
    res.send(req.body)
})

let data = {
    name: 'Jane',
    batch: '17.2',
    email: 'janedoe@mail.com'
}

app.patch('/profile', (req,res) => {
    const result = {
        ...data,
        ...req.body
    }
    res.send(result)
})

app.put('/profile', (res,req) => {
    const {name, batch, email} = req.body
    if(name && batch && email){
        data = {
            ...req.body
        }
        res.send(data)
    } else {
        res.status(400).send({
            succes: false,
            message: "All form must be filled"
        })
    }
})

app.get('/profile', (req,res) => {
    res.send(data)
})

app.delete('/profile', (req,res) => {
    data = null;
    res.send(data)
})


app.listen(8080, () => {
    console.log(`Listening Port 8080`)
})
