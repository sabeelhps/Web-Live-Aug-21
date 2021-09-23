

// function fun(f) {
//     f();
// }



// fun(function() {
//     console.log('inside a');
// });


// const arr = [1, 2, 3, 4, 5, 6];

// function square(num) {
//     return num * num;
// }



// Map method in JS


// let squareOfNums = arr.map(square);

// let squareOfNums = arr.map(function (num, idx) {
//     // console.log(idx);
//     return Math.sqrt(num);
// })

// const cubes = arr.map(function (num) {
//     return num ** 3;
// })

// console.log(arr);
// console.log(squareOfNums);
// console.log(cubes);


// -------------------------Filter method---------

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// function isEven(num) {
//     return num % 2 === 0;
// }

// const evenNums = nums.filter(isEven);

// console.log(nums);
// console.log(evenNums);


// --------------------------------sort

const arr = [1, 2, 3, 99, 11, 10, 12, 0, 32, 78];

arr.sort(function (a, b) {
    return b - a;
});

console.log(arr);