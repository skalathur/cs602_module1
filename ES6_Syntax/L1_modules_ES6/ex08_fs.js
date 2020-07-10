// NodeJS File system module -- Asynchronous read operation

var fs = require('fs');

// read asynchronously
fs.readFile('cs602.txt', (err, data) => {
	if (err) throw err;
	console.log(data);
	console.log(data.toString());
});

console.log("Done reading... really?");

