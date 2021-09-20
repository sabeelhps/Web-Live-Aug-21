
// // function defintion
// function fun() {
//     console.log('Hello fron function fun');
// }

// // function call
// fun();


// function add(x, y, z) {
//     // console.log(x + y + z);

//     return x + y + z;
// }

// const ans = add(2, 3, 4);
// console.log(ans);


// function subtract(a, b=2,c) {
    
//     return a - b - c;
// }

// const res = subtract(10, 4);
// console.log(res);



// function add(x, y) {
//     return x + y;
// }

// console.log(add(2, 3));
// console.log(add('Hello', 'World'));
// console.log(add(10, 'Hello'));
// console.log(add(true, 10));
// console.log(add(false, 'Hello'));
// console.log(add("", 10));
// console.log(add([], 15));

// functional expression 
// const f = function fun() {
//     console.log('Inside fun');
// }

// Anonymous function as function expression
// const f = function() {
//     console.log('Inside fun');
// }

// console.log(f);
// f();

// --------------------------------------------

// var x = 100;

// function fun() {
//     var y = 99;
//     console.log('Inside fun');
//     console.log(y);
// }

// console.log(x);
// fun();


// ----------------------------------------------


// console.log(a);

// b();


// function b() {
//     var c = 87;
//     console.log(c);
// }


// var a = 100;


// ----------------------------------------------------


console.log(a);

function b() {
    
    c();

    var d = 9999;

    function c() {
        console.log(d)
    }

}
b();

var a = 100;

