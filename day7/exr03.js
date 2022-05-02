// Доорх шаардлагын дагуу NodeJS сервер байгуулна уу
// https.get эсвэл https.request модуль ашиглан 
// https://ghibliapi.herokuapp.com/films URL-аас өөрийн датагаа авна
// Events модуль ашиглан EventEmitter объект үүсгэнэ үү
// http модуль ашиглан сервер ажиллуулна
// Ажиллах порт нь 3002
// Client талаас Server лүү “/films/show” гэдэг 
// PATH-аар хандахад тухайн хүсэлтийг “films-show” гэдэг Event сонсоод films.html 
// гэдэг файл руу Table ашиглан title, image баганыг үүсгэж хадгална уу. 
// Үүндээ fs модуль ашиглана уу.

const https = require('https')
const EventEmitter = require('events')
const eventEmintter = new EventEmitter()
const http = require('http')
const { create } = require('domain')

http.createteServer((req, res){

}).listen(3002)

