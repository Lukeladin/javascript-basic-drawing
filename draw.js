//name the html canvas as "myCanvas".
//you can change the color and even angle (if altered).

//makes an rectangle in the canvas
function rect(x,y,w,h,color){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.fill();
    ctx.stroke();
}

//makes an ellipse in the canvas
function ellipse(x,y,w,h,color){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(x, y, w, h, Math.PI /* / 4 */, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

//makes an line from coordinate1 to coordinate2 
function line(x,y, endX, endY){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(endX,endY);
    ctx.stroke();
    
}