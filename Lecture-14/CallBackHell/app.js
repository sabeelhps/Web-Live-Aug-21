
// Not a Good way of writing async code 
// Better way is to use promises

// function downloadFile(url,downloaded) {

//     console.log(`Starting the download from ${url}`);
//     setTimeout(() => {
//         const path = url.split('/').pop();
//         downloaded(path);
//     }, 3000);

// }


// function compressFile(path, compressed) {

//     console.log(`Starting the file compression for ${path}`);
//     setTimeout(() => {
//         const compressedPath = path.split('.')[0]+'.zip';
//         compressed(compressedPath);
//     },2000)

// }

// function uploadFile(compressedPath, uploaded) {
    
//     console.log(`Starting the file upload from ${compressedPath}`);

//     setTimeout(() => {
//         const uploadedPath = 'http://localsytem/' + compressedPath;
//         uploaded(uploadedPath);
//     }, 3000);
// }




// downloadFile('http://facebook.com/profile.jpg', function (path) {
//     console.log(`File Downloaded Successfully as ${path}`);
//     compressFile(path, function (compressedPath) {
//         console.log(`File Compressed Successfully as ${compressedPath}`);
//         uploadFile(compressedPath, function (uploadedPath) {
//             console.log(`File Uploaded Successfully at ${uploadedPath}`);
//             console.log('Everything Done!!');
//         });
//     });
// });


// Better way of writing code - Using Promise


// function fun() {
    

//     return new Promise((resolve, reject) => {
        
//         let randomNumber = Math.random();
//         console.log(randomNumber);
    
//         if (randomNumber < 0.5) {
//             resolve();
//         } else {
//             reject();
//         }

//     });

// }

// fun().then(function () {
//     console.log('Promise Resolved');
// }).catch(function () {
//     console.log('Inside Reject');
// })



function downloadFile(url) {

    return new Promise((resolve, reject) => {


        if (!url.startsWith('http')) {
            throw new Error("Invalid URL!!");
        }
        
        console.log(`Starting the download from ${url}`);
        setTimeout(() => {
            const path = url.split('/').pop();
            resolve(path);
        }, 3000);

    })
}


function compressFile(path) {


    return new Promise((resolve,reject) => {
        
        console.log(`Starting the file compression for ${path}`);
        setTimeout(() => {
            const compressedPath = path.split('.')[0]+'.zip';
            resolve(compressedPath);
        },2000)
    })

}

function uploadFile(compressedPath) {
    

    return new Promise((resolve, reject) => {
        
        console.log(`Starting the file upload from ${compressedPath}`);

        setTimeout(() => {
            const uploadedPath = 'http://localsytem/' + compressedPath;
            resolve(uploadedPath);
        }, 3000);
    })
}



// downloadFile('http://facebook.com/profile.jpg')
//     .then((path) => {
//         console.log(`File Downloaded Successfully as ${path}`);
//         compressFile(path)
//             .then((compressedPath) => {
//                 console.log(`File compressed successfully as ${compressedPath}`);
//                 uploadFile(compressedPath)
//                     .then((uploadedPath) => {
//                         console.log(`File uploaded Successfully as ${uploadedPath}`);
//                         console.log('Everything Done!!!');
//                     });
//             });
//     });






downloadFile('http://facebook.com/profile.jpg')
    .then(compressFile)
    .then(uploadFile)
    .then((uploadedPath) => {
        console.log(`File uploaded Successfully at ${uploadedPath}`);
        console.log('Everything done');
    })
    .catch((err) => {
        console.log("Something went wrong");
        // console.log(err);
        console.log(err.message);
    });




