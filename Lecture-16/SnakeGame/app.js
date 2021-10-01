const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'yellow';


const cs = 67;
const W = 1200;
const H = 735;
let food = null;
let score = 0;


const snake = {
    
    init_len: 5,
    direction: 'right',
    cells: [],
    
    createSnake: function () {
        
        for (let i = 0; i < this.init_len; i++){
            this.cells.push({
                x: i,
                y: 0
            });
        }
    
    },
    drawSnake: function () {
        
        for (let cell of this.cells) {
            pen.fillRect(cell.x*cs, cell.y*cs, cs-1, cs-1);
        }

    },
    updateSnake: function () {
        

        // getting the value of head of snake i.e last cell in array
        const headX = this.cells[this.cells.length - 1].x;
        const headY = this.cells[this.cells.length - 1].y;

        // Collision of head of snake with food
        if (headX === food.x && headY === food.y) {
            food = getRandomFood();
            score++;
        } else {
            // remove first cell
            this.cells.shift();
        }
        
        let nextX;
        let nextY;

        
        if (this.direction === 'down') {
            nextX = headX;
            nextY = headY + 1;

            if (nextY * cs >= H) {
                pen.fillStyle = 'red';
                pen.fillText('Game Over',100,100);
                clearInterval(id);
            }
            

        }
        else if (this.direction === 'up') {
            nextX = headX;
            nextY = headY - 1;

            if (nextY * cs < 0) {
                pen.fillStyle = 'red';
                pen.fillText('Game Over',100,100);
                clearInterval(id);
            }
            
        }
        else if (this.direction === 'left') {
            nextX = headX - 1;
            nextY = headY;

            if (nextX * cs < 0) {
                pen.fillStyle = 'red';
                pen.fillText('Game Over',100,100);
                clearInterval(id);
            }
        }
        else {
            nextX = headX + 1;
            nextY = headY;

            if (nextX * cs >= W) {
                pen.fillStyle = 'red';
                pen.fillText('Game Over',100,100);
                clearInterval(id);
            }
        }

      

        // push the new cell after the head inside the cells array
        this.cells.push({
            x: nextX,
            y: nextY
        });


    }
}


function init() {
    snake.createSnake();

    food = getRandomFood();


    function keyPressed(e) {
        
        if (e.key === 'ArrowDown') {
            snake.direction = 'down';
        }
        else if (e.key === 'ArrowLeft') {
            snake.direction = 'left';
        }
        else if (e.key === 'ArrowUp') {
            snake.direction = 'up';
        }
        else if (e.key === 'ArrowRight') {
            snake.direction = 'right';
        }

        console.log(snake.direction);
    }



    document.addEventListener('keydown', keyPressed);

}

function update() {
   
    snake.updateSnake();
}

function draw() {
   
    pen.clearRect(0, 0, W, H);
    pen.font = '40px sans-serif';
    pen.fillText(`Score ${score}`, 100, 50);
    pen.fillStyle = 'blue';
    pen.fillRect(food.x * cs, food.y * cs, cs, cs);
    pen.fillStyle = 'yellow';
    snake.drawSnake();
}

function gameLoop() {
    draw();
    update();
}

function getRandomFood() {
    
    const foodX = Math.round(Math.random() * (W - cs) / cs);
    const foodY = Math.round(Math.random() * (H - cs) / cs);

    food = {
        x: foodX,
        y:foodY
    }

    return food;
}


init();


const id= setInterval(gameLoop, 100);