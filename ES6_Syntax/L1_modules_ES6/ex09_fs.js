// NodeJS File system module -- Asynchronous write operation

var fs = require('fs');

// write 
fs.writeFile('cs701.txt', 
	'Welcome to CS701!',
	(err) => {
		if (err) throw err;
		console.log('Write success!');
	});

console.log("Done writing... really?");

