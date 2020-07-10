// const EventEmitter = require('events').EventEmitter;

const { EventEmitter } = require('events');

// Custom class 
class ClockEmitter  extends EventEmitter {
	
	constructor() {
		super();
		this._started = false;
	}

	start() {
		
	  if (this._started) return;

	  var tic = true;

	  this._started = true;

	  // Need to have a local reference to 'this'

	  var self = this;

	  this._interval = setInterval(() => {
	    var event = tic ? 'tic' : 'toc';
	    self.emit(event, self.getTime());
	    tic = ! tic;
	  }, 1000);
	
	}

	stop() {

		if (!this._started) return;

		clearInterval(this._interval);

  	this._started = false;
	
	}

	getTime() {
		return this._started && new Date();
	}
}

module.exports = ClockEmitter;

