

let a = 10;
let b = 20;

if (a > b) {
    console.log('a is greater');
}

if (b > a) {
    console.log('b is greater');
}

if (a < b && '6' === 6) {
    console.log('Hello World');
} else {
    console.log('Hello from JS')
}


const age = parseInt(prompt("Enter your Age"));


if (age < 18) {
    alert('You cannot Enter !');
} else if(age>=18 && age<25){
    alert('You can Enter but you cannot drink');
} else {
    alert('You can enter and drink');
}


