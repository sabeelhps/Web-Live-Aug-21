
// Normal Function declaration
function a() {
    console.log('inside a');
}


// Functional Expresssion

const square = function (num) {
    return num * num;
}


// Arrow Function 


const add = (x,y)=> {
    return x + y;
}


// Arrow Function Implicit Return
const squareRoot = num => Math.sqrt(num);



const car = {
    name: 'Audi',
    color: 'Black',
    getColor: ()=> {
        console.log(this);
        console.log(this.color);
    }
}


