console.log("im working");
let drawingSignature = false;
// let erasingSignature = false;

let myCanvas = document.getElementById("myCanvas");
let context = myCanvas.getContext("2d");


function beginSignature(event) {
    drawingSignature = true;
    context.beginPath();
    context.moveTo (event.pageX - myCanvas.offsetLeft, event.pageY - myCanvas.offsetTop);
}

function endSignature() {
    drawingSignature = false;
}

function clearSignature() {
    myCanvas.width = myCanvas.width;
}

function doDrawSignature(event) {
if (drawingSignature) {
    context.lineTo(event.pageX - myCanvas.offsetLeft, event.pageY - myCanvas.offsetTop);
    context.stroke();
}
}

myCanvas.onmousedown = beginSignature;
myCanvas.onmouseup = endSignature;
myCanvas.onmouseout = endSignature;
myCanvas.onmousemove =  doDrawSignature;