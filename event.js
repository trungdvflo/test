/** EVENT DRIVEN PROGRAMING */

const events = require('events');
// Tao mot doi tuong eventEmitter
const eventEmitter = new events.EventEmitter();

// Tao mot Event Handler nhu sau:
const connectHandler = function connected() {
   console.log('Tao ket noi thanh cong!');
   // Kich hoat su kien data_received 
   eventEmitter.emit('data_received');
}

// Gan ket su kien connection voi Event Handler
eventEmitter.on('connection', connectHandler);

// Gan ket su kien data_received voi mot ham an danh
eventEmitter.on('data_received', function(){
   console.log('Du lieu duoc tiep nhan thanh cong.');
});

// Kich hoat su kien connection 
eventEmitter.emit('connection');
console.log("Ket thuc chuong trinh.");