
// step -1 : Select element 
const h1 = document.getElementsByTagName('h1')[0];


// step-2 : Manipulate 

h1.style.color = 'green';
h1.style.backgroundColor = 'lightblue';
h1.style.textTransform = 'uppercase';
h1.style.border = '5px solid black';
h1.style.textShadow = '1px 2px 3px blue';


// Flip image

const image = document.querySelector('img');

let isTrue = false;

function flipImage() {
    
    if (isTrue) {
        image.setAttribute('src','https://images.unsplash.com/photo-1505672678657-cc7037095e60?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    } else {
        image.setAttribute('src','https://images.unsplash.com/photo-1632188733972-0b12f9901e47?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    }

    isTrue = !isTrue;
}

setInterval(flipImage, 2000);

