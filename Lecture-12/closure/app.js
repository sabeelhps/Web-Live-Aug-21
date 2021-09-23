


function a() {
    
    let d = 10;

    let b = 100;

    function c() {
        b++;
        d++;
        console.log(b);
    }

    return c;
}


let f = a();

//.......10000 lines

f();
f();
f();
f();
f();