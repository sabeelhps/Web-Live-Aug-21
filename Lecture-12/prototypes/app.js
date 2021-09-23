


const person = {
    name: 'Kartik',
    age: 25,
    isAdult: true,
    sayHello: function () {
        console.log('Hello from Kartik');
    }
}


let p1 = Object.create(person);
let p2 = Object.create(p1);