

const x = new Promise(function (resolve, reject) {
    
    setTimeout(() => {
        let randomNumber = Math.random();
        console.log(randomNumber);
    
        if (randomNumber < 0.5) {
            resolve();
        } else {
            reject();
        }
    
    }, 2000);

});


x.then(function () {
        console.log('Inside Resolve');
    })
    .catch(function () {
        console.log('Inside Reject');
    })