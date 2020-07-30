let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let dx = -1;
let dy = -2

function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size
}
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI*2);
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.closePath();
}
function getCursorPosition(event) {
    let x = event.clientX;
    let y = event.clientY;
    draw(x, y);
}
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
function draw(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(x, y)
    x += dx;
    y += dy;
    
}
canvas.addEventListener('click', function(e) {
    getCursorPosition(e)
})
window.addEventListener('resize', resizeCanvas, false);
resizeCanvas();
