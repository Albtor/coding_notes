const EventEmitter = require('events'); //events module it is built in NodeJS
const eventEmitter = new EventEmitter();

eventEmitter.on('2_tutorial', (num1, num2)=> {
    console.log(num1 + num2);
});

eventEmitter.emit('2_tutorial', 1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let pedro = new Person('Pedro');
pedro.on('name', ()=>{
    console.log('My name is '+pedro.name);
});

pedro.emit('name');