let fs = require('fs')
let http = require('http')
let querystring = require("querystring")

http.createServer((req, res) => {
    if (req.url.match('/^\/data=png/')) {

        const type = querystring.parse(req.url./^\)
        console.log(type);
        fs.readFile('ppp.png', (error, data) => {
            if (error) {
                throw error
            } else {
                res.writeHead(200, { "Content-Type": "image/png" })
                res.write(data)
                res.end(data)
            }
        })
    } else {
        res.end('Not found')
    }

    s
}).listen(3000)

console.log("successfully");