// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// var painting = document.getElementById("paint")
// var paintStyle = getComputedStyle(painting)

// var mouse = {
//     x:0,
//     y:0
// }

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

// canvas.addEventListener('mousedown', mHandler);

// function mHandler(event) {
    
//     if(event.offsetX && event.offsetY) {
//         mouse.x = event.offsetX;
//         mouse.y = event.offsetY;
//     }
//     else {
//         mouse.x = event.layerX;
//         mouse.y = event.layerY;
//     }
// };

// function main() {
//     ctx.clearRect(0, 0, ctx.width, ctx.height);
//     ctx.fillStyle = "gray";
//     ctx.fillRect(mouse.x -25, mouse.y -25, 50, 50);
// }

// setInterval(main, 1000 / 60);

// $("#mapImg").click(function() {
//     var position = $(this).offset()
//     $("#smoke").offset(position).show()
// })

// function doSomething(e) {
// 	var posx = 0;
// 	var posy = 0;
// 	if (!e) var e = window.event;
// 	if (e.pageX || e.pageY) 	{
// 		posx = e.pageX;
// 		posy = e.pageY;
// 	}
// 	else if (e.clientX || e.clientY) 	{
// 		posx = e.clientX + document.body.scrollLeft
// 			+ document.documentElement.scrollLeft;
// 		posy = e.clientY + document.body.scrollTop
// 			+ document.documentElement.scrollTop;
//     }
//     $("#mapImg").click(function() {
//         $("#smoke").offset({top: posx, left: posy}).show()
//     })
	
// }

$(function(){
	var fadeDelay = 1000;
	var fadeDuration = 1000;
    $(document).click(function(e){
		var div = $('<div class="image-wrapper">')
			.css({
				"left": e.pageX + 'px',
				"top": e.pageY + 'px'
			})
			.append($('<img src="" alt="myimage" />'))
			.appendTo(document.body);
				
		setTimeout(function() {
			div.addClass('fade-out');			
			setTimeout(function() { div.remove(); }, fadeDuration);
		}, fadeDelay);
    });
});
