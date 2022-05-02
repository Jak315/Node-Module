// Доорх шаардлагын дагуу NodeJS сервер байгуулна уу.
// Http модуль ашиглан сервер ажиллуулна уу.
// Ажиллах порт нь 3000	
// Events модуль ашиглан EventEmitter объект үүсгэнэ үү
// Хэрвээ Client нь сервер лүү root path-аар хүсэлт илгээвэл 
// консоль дээр event сонсож “Хүсэлтийг амжилттай хүлээж авлаа” гэдэг мессеж хэвлэнэ

const http = require('http')
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

http.createServer(function (request, response) {
    eventEmitter.emit('ss')
    response.end()

}).listen(3000)

eventEmitter.on('ss', () => {
    console.log('it is on');
})
