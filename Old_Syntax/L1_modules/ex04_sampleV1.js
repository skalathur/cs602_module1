var foo = require('./ex04_fooV1');

console.log(foo);

console.log(foo.getFirstName(), 
					  foo.getLastName());

foo.setLastName('Doe');

console.log(foo.getFirstName(), 
					  foo.getLastName());

