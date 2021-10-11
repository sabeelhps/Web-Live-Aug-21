const fs = require('fs');
const path = require('path');


const data = 'Hello from File System';

const F1 = path.join(__dirname, 'files', 'xyz.txt');
const F2 = path.join(__dirname, 'files', 'def.txt');


// console.log(__dirname);
// console.log(process.cwd());


fs.writeFile(F2,data,{
    encoding: 'utf-8',
    flag:'w'
}, (err) => {
    if (err) throw err;
    console.log('File Written Successfully');
})


// fs.readFile(F1,{encoding:'utf-8',flag:'r'}, (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

