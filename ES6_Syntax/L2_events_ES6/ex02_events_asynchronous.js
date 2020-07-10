// NodeJS events module - Asynchronous handlers

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('event1',  (args) => {
	
		setImmediate(() => {
			console.log('First subscriber:', args);
		})
    
});

emitter.on('event1',  (args) => {

		setImmediate(() => {
			console.log('Second subscriber:', args);
		})
    
});

// Emit
emitter.emit('event1', {a: 'foo', b: 'bar'});

console.log("...After event handlers..., really?");


