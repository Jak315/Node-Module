const headers = {
    'Content-Type': 'application/JSON'
};
var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
    response.writeHead(200);
    const data = fs.readFileSync("sample.pdf")
    response.end(data)
}).listen(3003);

console.log("Server is tstarted");
