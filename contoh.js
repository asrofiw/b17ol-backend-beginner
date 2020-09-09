const { request, response } = require('express')
const express = require('express')

const app = express()

app.use('/public',express.static('assets'))

app.get('/', (request, response) => {
    response.send('Hello!')
})

app.get('/home', (request, response) => {
    response.send('Welcome Home!')
})

app.get('/items', (req, res) => {
    res.status(200).send({
        succes: true,
        message: 'Listing items',
        data: [
            {
                id: 1,
                name: 'Barang Antik : Sapu',
                price: 10000,
                description: 'Sapu adalah alat rumah tangga'
            },
            {
                id: 2,
                name: 'Barang Antik : Sapu',
                price: 10000,
                description: 'Sapu adalah alat rumah tangga'
            },
            {
                id: 3,
                name: 'Barang Antik : Sapu',
                price: 10000,
                description: 'Sapu adalah alat rumah tangga'
            },
            {
                id: 4,
                name: 'Barang Antik : Sapu',
                price: 10000,
                description: 'Sapu adalah alat rumah tangga'
            },
            {
                id: 5,
                name: 'Barang Antik : Sapu',
                price: 10000,
                description: 'Sapu adalah alat rumah tangga'
            }
        ]
    })
})

app.listen(8080, () => {
    console.log('App listening on port 8080')
})