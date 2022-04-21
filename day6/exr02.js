// // Ex-02 (2 points required)
// // Доорх шаардлагын дагуу NodeJS сервер байгуулна уу
// // Https.get эсвэл https.request модуль 
// ашиглан https://ghibliapi.herokuapp.com/films URL-aaс датагаа авна
// // fs модуль ашиглан тухайн датаг авсны дараа films.json
//  гэдэг файл дотор хадгална. 
// // Ажиллах порт нь 3001

const { create } = require("domain");

var content = "Not found";
var http = require('http')
var https = require('https')



http.createServer((req, res) => {
    https.get("https://ghibliapi.herokuapp.com/films", (Response) => {
        let data = [];
        Response.on("data", (chunk) => {
            data.push(chunk);
        })
        Response.on('end', () => {
            let fs = require("fs");
            const films = JSON.parse(Buffer.concat(data).toString())
            fs.writeFileSync('films.json', JSON.stringify(films))
        })
    })
        .on('err', () => {
            console.log('error' + err.content);
        })
    res.writeHead(200)
    res.write("success!")
    res.end()
}).listen(3001)

console.log("file append successfully");

// let https = require("https");
// let http = require('http')




// http.createServer(function (request, repsonse) {
//     https
//         .get(" https://ghibliapi.herokuapp.com/films", (Response) => {
//             let data = [];
//             Response.on("data", (chunk) => {
//                 data.push(chunk);
//             });
//             Response.on("end", () => {
//                 let fs = require("fs");
//                 const films = JSON.parse(Buffer.concat(data).toString());
//                 fs.writeFileSync("films.json", JSON.stringify(films));
//             });
//         })
//         .on("err", (err) => {
//             console.log("Error" + err.message);
//         });



//     repsonse.writeHead(200);
//     repsonse.write("success!");
//     repsonse.end();`
// }).listen(3001);
// console.log("Server running at http://localhost:3001");
