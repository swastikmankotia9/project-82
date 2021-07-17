var mouseEvent = "";

var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "black";

width_of_line = 1;

canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e){
    mouseEvent = "mouseUp";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseleave", myMouseLeave);

function myMouseLeave(e){
    mouseEvent = "mouseLeave";
    console.log(mouseEvent);
}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        console.log("current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2 * Math.PI);
        ctx.stroke();
    }
}