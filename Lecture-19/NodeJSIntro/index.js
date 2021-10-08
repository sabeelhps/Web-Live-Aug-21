

// const names = process.argv.slice(2);

// console.log(names);

// for (let name of names) {
//     console.log(`Hello from ${name}`);
// }


const num = parseInt(process.argv[2]);
console.log(process.cwd());

function print(n) {
    
    for (let i = 1; i <= n; i++){
        console.log(i);
    }

}

print(num);