// Object destructuring syntax

let { firstName, lastName } = require('./ex02_foo');

console.log(firstName, lastName);

lastName = 'Doe';
console.log(firstName, lastName);


var foo2 = require('./ex02_foo');
console.log(foo2.firstName, foo2.lastName);

