

// function fun(name,age) {
    
//     this.name = name;
//     this.age = age;
// }

// fun('Kartik',25);


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello=function() {
    console.log(`Hello from ${this.name}`);
}

const p1 = new Person('Vivek', 23);
const p2 = new Person('Garvit', 24);
const p3 = new Person('Tushar', 22);