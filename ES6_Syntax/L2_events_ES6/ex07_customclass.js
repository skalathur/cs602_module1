// const EventEmitter = require('events').EventEmitter;

const { EventEmitter } = require('events');


// Custom class 
class Foo  extends EventEmitter {
	constructor(args) {
		super();
		this.data = args;
	}

	// Sample member function that raises an event
	test1() {
		this.emit('event1', 200)
	}
}

// Can still use the prototype to define new functions
// Need function syntax

Foo.prototype.test2 = function (args) {
    this.emit('event1', args);
}

// Usage
const foo = new Foo(100);

// Function syntax required to use 'this' keyword

foo.on('event1', function (args) {
    console.log('Event raised!', 
    	args, foo.data, this.data);
});

foo.test1();
foo.test2(500);
