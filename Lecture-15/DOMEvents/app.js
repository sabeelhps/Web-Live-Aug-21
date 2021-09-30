const btn = document.getElementById('btn');
const h1 = document.querySelector('h1');
const buttons = document.querySelectorAll('section button');



function fun() {
    console.log('inside fun');
}

// btn.onclick = fun;


function scream() {
    console.log('SCREAM......');
}

function shout() {
    console.log('SHOUT.......');
}

// btn.onclick = scream;

// --------------------------------click events------

btn.addEventListener('click', scream);
btn.addEventListener('click', shout);


h1.addEventListener('click', () => {
    console.log('DONT CLICK ME!!!');
});



// -------------------------------Mouse events-------------

for (let button of buttons) {
    button.addEventListener('mouseenter', (e) => {
        e.target.style.border = '3px solid black';
        e.target.style.backgroundColor = 'lightgreen';
        e.target.style.boxShadow = '1px 1px 3px gray';
    });
    button.addEventListener('mouseleave', (e) => {
        e.target.style.border = '';
        e.target.style.backgroundColor = '';
        e.target.style.boxShadow = '';
    });

}

h1.addEventListener('mouseenter', () => {
    h1.classList.add('heading');
});

h1.addEventListener('mouseleave', () => {
    h1.classList.remove('heading');
});



// -----------------------keyboard Events-------

const inp = document.getElementById('inp');

inp.addEventListener('keydown', () => {
    console.log(inp.value);
});

// ------------------------form events

const form = document.querySelector('form');


form.addEventListener('submit', (e) => {

    // prevent the form to refresh the page by default
    e.preventDefault();

    console.log('Form Submitted');
})


// -------------------------other events-----------

const p = document.querySelector('p');

p.addEventListener('copy', () => {
    alert('Stop Copying Now 😠😠😠😠😠😠')
})








