const https = require('https')
const http = require('http')

http.createServer((req, res) => {
    https.get('https://ghibliapi.herokuapp.com/films', (response) => {
        let data = []
        response.on('data', (chunk) => {
            data.push(chunk)
        })
        response.on('end', () => {

        })
    })
})