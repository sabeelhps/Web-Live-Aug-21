
// async keyword wraps the function into a promise
// async function add(x, y, z) {
    
//     return x + y + z;
// }


// add(1, 2, 3)
//     .then((data) => {
//         console.log(data);
//         console.log('Inside resolve');
//     })
//     .catch((err) => {
//         console.log(err);
//     });


async function fun() {
    
    console.log('starting the fun function');

    console.log('starting to fetch the data');
    
    const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');

    console.log('starting to parse the res');
    const data = await res.json()

    console.log('printing the data');

    console.log(data);

    console.log('fun function completed');
    console.log('everything done');
}

console.log('START');

fun();

console.log('After fun function');
console.log('After fun function');
console.log('After fun function');
console.log('After fun function');
console.log('After fun function');
console.log('After fun function');
console.log('After fun function');


console.log('END');

