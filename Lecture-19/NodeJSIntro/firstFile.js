console.log('Hello from NodeJS');

const PI = 3.14;

let magicNum = 37;



function square(num) {
    return num * num;
}

const person = {
    firstName: 'Sabeel',
    lastName: 'Khan',
    age: 22,
    shoutFullName: function () {
        return `Hello from ${this.firstName} ${this.lastName}`;
    }
}


console.log(PI);
console.log(magicNum);
console.log(square(8));

console.log(person.firstName);
console.log(person['last' + 'Name']);
console.log(person.shoutFullName());



const fruits = ['Apple', 'Guava', 'Oranges'];

for (let fruit of fruits) {
    console.log(fruit);
}


const arr = [1, 2, 3, 4, 5];

const cube = num => num * num * num;


const cubes = arr.map(cube);

console.log(arr);
console.log(cubes);