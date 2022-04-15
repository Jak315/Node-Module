// Ex-3 (2 оноо заавал хийх)
// HTTP болон FS  модуль ашиглан
// Content.html гэдэг файл дотор өөрийн дуртай HTML контент оруулах
// Түүнийгээ FS модуль ашиглан 3002 порт дээр ажиллуулах nodejs код бичнэ үү
var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
    response.writeHead(200);
    const data = fs.readFileSync("test.html")
    response.end(data)
}).listen(3003);

console.log("Server is tstarted");

