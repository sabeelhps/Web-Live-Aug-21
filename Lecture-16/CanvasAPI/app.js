const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'red';



let init_x = 50;
let init_y = 50;


// This is going to initialize the game
function init() {
    pen.fillRect(init_x, init_y, 50, 50);
}



// update the properties of a game
function update() {
    init_x += 50;
}


// Draw something on to the canvas
function draw() {
    pen.clearRect(0, 0, 1200, 735);
    pen.fillRect(init_x, init_y, 100, 100);
}


// Game Loop
function gameLoop() {
    console.log('Game Loop')
    update();
    draw();
}

init();


const id = setInterval(gameLoop, 200);







