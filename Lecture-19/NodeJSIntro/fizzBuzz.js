


function fizzBuzz(num) {
    
    for (let i = 1; i <= num; i++){
        
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzBuzzz');
        }
        else if (i % 3 === 0) {
            console.log('fizz');
        }
        else if (i % 5 === 0) {
            console.log('buzz');
        }
        else {
            console.log(i);
        }
    }
}


function fizzBuzzImproved(num) {
    
    for (let i = 1; i <= num; i++){
        
        let str = "";

        if (i % 3 === 0) {
            str += 'fizz';
        }
        if (i % 5 === 0) {
            str += 'buzz';
        }
        if (str === "") {
            str += i;
        }

        console.log(str);

    }
}


// fizzBuzz(20);

fizzBuzzImproved(20);