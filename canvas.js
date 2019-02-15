var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var painting = document.getElementById("paint")
var paintStyle = getComputedStyle(painting)

var mouse = {
    x:0,
    y:0
}

// canvas.addEventListener("mousemove", function(e){
//     mouse.x = e.pageX - this.offsetLeft;
//     mouse.y = e.pageY - this.offsetTop
// }, false);

// ctx.lineWidth = 3
// ctx.lineJoin = "round"
// ctx.lineCap = "round"
// ctx.strokeStyle = "#00CC99" 


// canvas.addEventListener("mousedown", function(e){
//     ctx.beginPath();
//     ctx.moveTo(mouse.x, mouse.y)
//     canvas.addEventListener("mousemove", onPaint, false)
// }, false)

// canvas.addEventListener("mouseup", function(){
//     canvas.removeEventListener("mousemove", onPaint, false)
// }, false)

// var onPaint = function (){
//     ctx.lineTo(mouse.x, mouse.y);
//     ctx.stroke();
// }

canvas.addEventListener('mousedown', mHandler);

function mHandler(event) {
    
    if(event.offsetX && event.offsetY) {
        mouse.x = event.offsetX;
        mouse.y = event.offsetY;
    }
    else {
        mouse.x = event.layerX;
        mouse.y = event.layerY;
    }
};

function main() {
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    ctx.fillStyle = "red";
    ctx.fillRect(mouse.x -25, mouse.y -25, 50, 50);
}

setInterval(main, 1000 / 60);

