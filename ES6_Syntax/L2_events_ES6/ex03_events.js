// NodeJS events module - pass data through handlers

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('event1',  (args) => {
    console.log('First subscriber:', args);
    args.handled = false;
});

emitter.on('event1',  (args) => {
	console.log('Second subscriber (1):', args);
	if (args.handled) {
    	console.log('Second subscriber (2):', args);
	}
});

// Emit
emitter.emit('event1', {a: 'foo', b: 'bar'});

