// Ex-1 (2 оноо заавал хийх)
// HTTP модуль ашиглан 
// {
//    “Type”: “animal”,
//    “Race”: “Sheep”
// }
// Гэдэг JSON буцаадаг сервер бичнэ үү. Сервер нь 3000 порт дээр ажиллах ёстой.


var obj = {
    type: 'animal',
    job: "sheep",
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