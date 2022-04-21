const os = require('os')
console.log(os.type());
console.log(os.arch());
console.log(os.platform());

let jsonData = JSON.stringify(os.platform())
let jsonData2 = JSON.stringify(os.arch())
let jsonData3 = JSON.stringify(os.release())
let jsonData4 = JSON.stringify(os.totalmem())
let jsonData5 = JSON.stringify(os.cpus())
let jsonData6 = JSON.stringify(os.freemem())

let obj = {
    platform: os.platform(),
    arch: os.arch(),
    release: os.release(),
    totalmem: os.totalmem(),
    cpus: os.cpus(),
    freemem: os.freemem()
}

var http = require('http');

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000,
    'Content-type': 'application/json'
};

http.createServer(function (request, response) {
    response.writeHead(200, headers);
    response.end(JSON.stringify(obj));
    console.log(`Your Operating System:${obj.platform}-${obj.arch}-${obj.release}-${obj.totalmem} of your RAM is free ${obj.freemem}`);
}).listen(3000);


// Доорх шаардлагын дагуу NodeJS сервер байгуулна уу.
// OS модуль ашиглан доорх мэдээллийн JSON дата буцаадаг сервер байгуулна уу
// Platform
// Arc
// Total memoryhitecture
// Release
// Total cpus 
// Free `memory`
// Консоль дээр доорхи утгыг хэвлэнэ үү. Доорх утгууд нь жишээ болгон харуулсан болно.
// Your Operating System: 5.2.9-arch1-1-ARCH linux x64 18.63 % of your RAM is free.
// Ажиллах порт нь 3000
