
var obj = {
    name: 'Jays',
    job: "students",
    lastname: 'Mr'
}

let jsonData = JSON.stringify(obj)

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000,
    'Content-Type': "application/json",
};

var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, headers);
    response.end(jsonData);
}).listen(3000);

console.log('Server running at http://localhost:3000');