// console.log('Hello World from node JS');

const tutorial = require('./2_tutorial'); //within the same exact path
console.log(tutorial);
console.log(tutorial.sum(3,9));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject);