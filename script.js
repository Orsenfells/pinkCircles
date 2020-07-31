let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let dx = -1;
let dy = -2
let balls = []

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}
function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size
}

Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

Ball.prototype.update = function() {
    if((this.x + this.size) >= width) {
        this.velX = -(this.velX);
        if((this.x + this.size) > width) {
            this.x = width - this.size;
        }
    }

    if((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if((this.y + this.size) >= height) {
        this.velY = -(this.velY);
        if((this.y + this.size) > height) {
            this.y = height - this.size;
        }
    }

    if((this.y - this.size) <= 0) {
        this.velY = -(this.velY)
    }

    this.x += this.velX;
    this.y += this.velY
}

// function drawCircle(x, y) {
//     ctx.beginPath();
//     ctx.arc(x, y, 20, 0, Math.PI*2);
//     ctx.fillStyle = "pink";
//     ctx.fill();
//     ctx.closePath();
// }
function getCursorPosition(event) {
    let x = event.clientX;
    let y = event.clientY;
    let ball = new Ball(x, y, random(-4, 4),random(-4, 4), 'hotpink', 20)
    ball.draw();
    balls.push(ball)
    
}

function loop() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    ctx.fillStyle = 'rgba(250, 250, 250, 1)';
    ctx.fillRect(0, 0, width, height);

    for(let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        
    }

    requestAnimationFrame(loop);
}
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
// function draw(x, y) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawCircle(x, y)
//     x += dx;
//     y += dy;
    
// }
canvas.addEventListener('click', function(e) {
    getCursorPosition(e)
})



loop();
