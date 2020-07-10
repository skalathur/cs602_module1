// NodeJS OS module

var os = require('os');
var gigaByte = 1024*1024*1024;

console.log('Total Main Memory', 
	os.totalmem() / gigaByte, 'GBs');

console.log('This machine has', 
	os.cpus().length, 'CPUs');

os.cpus().map(cpu => console.log(cpu.model));

