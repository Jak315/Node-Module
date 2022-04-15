const headers = {
    'Content-Type': 'application/JSON'
};
var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
    response.writeHead(200);
    const data = fs.readFileSync("funny.jpeg")
    response.end(data)
}).listen(3004);

console.log("Server is tstarted");
