const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
    console.log('start');
})

eventEmitter.emit('start')



function Circle(x, y, r) {
    function r_squared() {
        return Math.pow(r, 2);
    }

    function area() {
        return Math.PI * r_squared();
    }

    return {
        area: area,
    };
}

module.export = Circle;