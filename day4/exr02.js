// Ex-2 (2 оноо заавал хийх)
// HTTP модуль ашиглан
// H1 ашигласан нэг текст
// <p> ашигласан нэг текст
// <ol> <ul> ашигласан тескт 
// Дээрх хэсгийг оруулан 3001 порт дээр сервер ажиллуулах код бичнэ үү.

var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200);
    response.write(`<h1>Hello world Node !!!!</h1>\n
        <p> test </p>
        <ul>
            <li>test</li>
            <li>testing</li>
        </ul>
        <ol>
            <li>run</li>
        </ol>
    `);
    response.end();
}).listen(3001);
console.log('Server running at http://localhost:3001');
