


function fizzBuzzOptimise(num) {
    
    let cnt3 = 1;
    let cnt5 = 1;

    for (let i = 1; i <= num; i++){

        let str = "";

        if (cnt3 === 3) {
            str += 'fizz';
            cnt3 = 0;
        }
        if (cnt5 === 5) {
            str += 'buzz';
            cnt5 = 0;
        }
        if (str === "") {
            str += i;
        }

        console.log(str);
        cnt3++;
        cnt5++;
    
    }

}


fizzBuzzOptimise(20);