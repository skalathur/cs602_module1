// NodeJS File system module -- Synchronous delete operation

var fs = require('fs');
try {
  fs.unlinkSync('./cs602.txt');
  console.log('cs602.txt successfully deleted');
}
catch (err) {
   console.log('Error:', err);
}

console.log("Delete done!");
