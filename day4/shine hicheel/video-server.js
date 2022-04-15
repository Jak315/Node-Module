const headers = {
    'Content-Type': 'video/mp4'
};
var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
    response.writeHead(200, headers);
    const data = fs.readFileSync("vidds.mp4")
    response.end(data)
}).listen(3005);

console.log("Server is tstarted");
