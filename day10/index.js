const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/hot', (req, res) => {
    res.send('hello Library')
})

app.get('/library', (req, res) => {
    console.log(req.params);
    fs.readFile("library.json", (error, data) => {
        if (error) {
            throw error;
        } else (
            res.send(data)
        )
    })
})

// app.get('/library', (req, res) => {
//     console.log(req.params);
//     fs.readFile("library.json", (error, data) => {
//         if (error) {
//             throw error;
//         } else {
//             const library = JSON.parse(data)
//             // console.log(library);
//             // console.log(req.query)
//             if (library.filter(e => e.user.id == req.query.userId && e.book.id == req.query.bookId)) {
//                 res.send(data)
//             } else {
//                 res.send("Data bhgu")
//             }
//         }

//         // res.send(data)

//     })
// })

app.route('/book')
    .get(function (req, res) {
        res.send('Get a random book')
    })
    .post(function (req, res) {
        console.log(req.body);
        res.send("add a book")
    })
    .put(function (req, res) {
        res.send('Update the book')
    })

app.use(express.static('public'))
app.use('/static', express.static('public'))

app.listen(3000)
console.log(' app is started 3000');
