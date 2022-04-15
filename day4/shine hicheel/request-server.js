var http = require('http');
const bye = {
    name: "hello",
    message: "bye"
};
var fs = require("fs");
var queryString = require('querystring')

http.createServer((request, response) => {
    if (request.url === '/hello') {
        response.writeHead(200, { 'content-Type': "text/html" });
        response.write('<h1>hello Jay</h1>')
        response.end()
    }
    else if (request.url === '/bye') {
        response.writeHead(200, { 'Content-Type': 'application/JSON' });
        response.write(JSON.stringify(bye));
        response.end()
    }
    else if (request.url === '/video') {
        response.writeHead(200, { 'Content-Type': 'video/mp4' });
        const data = fs.readFileSync("vidds.mp4")
        response.end(data)
    }
    else if (request.url === '/pic') {
        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
        const data = fs.readFileSync("funny.jpeg")
        response.end(data)
    }
    else if (request.url === '/why') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('does not match')
        response.end()
    } else if (request.url === '/why') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('does not match')
        response.end()
    }

    else if (request.url === '/hi') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('bye')
        response.end()
    }
    else if (request.url === '/q?x=5&y=6&z=8') {
        console.log('query param');
        const { x, y, z } = queryString.parse(request.url.slice(3));
        const sum = Number(x) + Number(y) + Number(z);
        response.end();
    }

    else {
        response.writeHead(404, { "Content-Type": "text/plain" })
        response.write('not found');
        response.end();
    }
}).listen(3000);
console.log('Server is starting at 3000')