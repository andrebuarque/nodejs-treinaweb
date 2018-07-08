const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('meu evento', () => console.log('evento executado!'));

emitter.emit('meu evento');