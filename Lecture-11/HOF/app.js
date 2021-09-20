

// function fun(x,func) {
    
//     console.log(x);
//     console.log('inside fun')
   
//     // console.log(func);

//     func();
// }


// function innerFun() {
//     console.log('Inside inner fun');
// }


// fun(87, function() {
//     console.log('Inside inner fun');
// });


// --------------------------

function fun() {
    
    console.log('inside fun');

    function innerFun() {
        console.log('innerFun');
    }

    return innerFun;
}

const f = fun();

// console.log(f);

f();
