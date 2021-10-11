const fs = require('fs');
const path = require('path');

const F1 = path.join(__dirname, 'inp1.txt');
const F2 = path.join(__dirname, 'inp2.txt');

const F3 = path.join(__dirname, 'output.txt');


fs.readFile(F1, (err, data) => {
    const arr1 = data.toString().split('\n');
    // console.log(arr1);

    fs.readFile(F2, (err, data) => {
        const arr2 = data.toString().split('\n');
        // console.log(arr2);

        // Merge two arrays from inp1 and inp2 files
        let ans = arr1.concat(arr2);

        // sort the numbers in ascending order
        ans.sort((a, b) => a - b);
        
        ans = ans.join('\n');
       
        fs.writeFile(F3, ans, { encoding: 'utf-8', flag: 'w' }, (err) => {
            if (err) throw err;
            console.log('File Written Successfully');
        })


    })

});







