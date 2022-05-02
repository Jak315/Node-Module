// Http модуль ашиглан сервер ажиллуулна уу.
// Ажиллах порт нь 3001	
// Events модуль ашиглан EventEmitter объект үүсгэнэ үү
// https.get эсвэл https.request модуль ашиглан https://ghibliapi.herokuapp.com/films
//  URL-aaс датагаа авна.Хэрвээ client нь сервер лүү “/films” PATH-аар хүсэлт
//  илгээвэл events модулийн films гэдэг event сонсоод fs модуль ашиглан тухайн 
//  датаг авсны дараа films.json гэдэг файл дотор хадгална. 

const http = require('http')
const fs = require('fs')
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()
const https = require('https')

http.createServer((request, response) => {
    if (request.url === '/film') {
        eventEmitter.emit('okk')
        response.end('<h1>hfsuivh</h1>')
    }

}).listen(3001)

eventEmitter.on('okk', () => {
    https
        .get("https://ghibliapi.herokuapp.com/films", (Response) => {
            let data = [];
            Response.on("data", (chunk) => {
                console.log(chunk);
                data.push(chunk);
            });
            Response.on("end", () => {
                let fs = require("fs");
                const films = JSON.parse(Buffer.concat(data).toString());
                fs.writeFileSync("films.json", JSON.stringify(films));
            });
        })
        .on("err", () => {
            console.log("error" + err.content);
        });
})


