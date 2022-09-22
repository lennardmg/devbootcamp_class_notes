(function () {
    // console.log("im connected.");

    //
    // first canvas (class):

    // var canvas = document.getElementById("canvas");
    // var ctx = canvas.getContext("2d");
    // console.log("canvas", canvas);

    // // triangle:
    // ctx.beginPath();
    // ctx.strokeStyle = "orange";
    // ctx.lineWidth = 3;

    // ctx.moveTo(150, 150);
    // ctx.lineTo(450, 300);
    // ctx.lineTo(150, 300);
    // ctx.lineTo(150, 150);

    // ctx.closePath();

    // ctx.stroke();

    // ctx.fillStyle = "green";
    // ctx.fill();

    // // circle:
    // ctx.strokeStyle = "blue";
    // ctx.lineWidth = 2;

    // ctx.beginPath();
    // ctx.arc(450, 450, 70, 0, 2 * Math.PI);

    // ctx.stroke();

    // // rectangle:
    // ctx.beginPath();
    // ctx.strokeRect(20, 20, 30, 40);

    // // (x, y, width, heigth)
    // ctx.fillRect(30, 40, 50, 20);

    // ctx.fillRect(50, 380, 70, 50);
    ///
    ///
    //
    //

    // Stickfigure:
    var canvas2 = document.getElementById("canvas2");
    var ctx2 = canvas2.getContext("2d");

    ctx2.beginPath();
    ctx2.strokeStyle = "black";
    ctx2.lineWidth = 4;

    //body
    ctx2.moveTo(250, 200);
    ctx2.lineTo(250, 350);
    //legs
    ctx2.lineTo(300, 400);
    ctx2.moveTo(250, 350);
    ctx2.lineTo(200, 400);
    //arms
    ctx2.moveTo(250, 250);
    ctx2.lineTo(300, 200);
    ctx2.moveTo(250, 250);
    ctx2.lineTo(200, 200);

    ctx2.stroke();
    ctx2.closePath();
    //head

    ctx2.beginPath();
    ctx2.arc(250, 175, 25, 0, 2 * Math.PI);

    ctx2.stroke();

    //eyes
    ctx2.beginPath();
    ctx2.strokeStyle = "black";
    ctx2.lineWidth = 1;

    ctx2.arc(240, 170, 3, 0, 2 * Math.PI);
    ctx2.stroke();
    ctx2.fillStyle = "blue";
    ctx2.fill();

    ctx2.beginPath();
    ctx2.arc(260, 170, 3, 0, 2 * Math.PI);
    ctx2.stroke();
    ctx2.fillStyle = "blue";
    ctx2.fill();

    //nose
    ctx2.strokeStyle = "black";
    ctx2.lineWidth = 1;
    ctx2.beginPath();
    ctx2.moveTo(250, 175);
    ctx2.lineTo(246, 178);
    ctx2.lineTo(250, 179);
    ctx2.stroke();

    //mouth
    ctx2.strokeStyle = "black";
    ctx2.lineWidth = 1;

    ctx2.beginPath();
    ctx2.arc(250, 185, 5, 0, 1 * Math.PI);
    ctx2.stroke();
    ctx2.fillStyle = "grey";
    ctx2.fill();

    //
    //
    // stickfigure movement:
    var canvas3 = document.getElementById("canvas3");
    var ctx3 = canvas3.getContext("2d");
    var x = 150;
    var y = 150;



window.addEventListener("load", function() {
ctx3.drawImage(canvas2, x, y);
console.log("page has loaded");
});

var warning = document.getElementsByClassName("warning")[0];

document.addEventListener("keydown", function(e) {
        if (e.keyCode === 39) {
            if (x > 590) {
                console.log("I wont go further than this.");
                warning.classList.add("appear");
            } else {
                x = x + 10;
                ctx3.clearRect(x - 10, y, 500, 500);
                ctx3.drawImage(canvas2, x, y);
                warning.classList.remove("appear");
                warning.classList.add("disappear");
            }
        } else if (e.keyCode === 37) {
            if (x < - 190) {
                console.log("I wont go further than this.");
                warning.classList.add("appear");
            } else {
            x = x - 10;
            ctx3.clearRect(x + 10, y, 500, 500);
            ctx3.drawImage(canvas2, x, y);
            warning.classList.remove("appear");
            warning.classList.add("disappear");
            }
        } else if (e.keyCode === 40) {
            if (y > 290) {
                console.log("I wont go further than this.");
                warning.classList.add("appear");
            } else {
            y = y + 10;
            ctx3.clearRect(x, y - 10, 500, 500);
            ctx3.drawImage(canvas2, x, y);
            warning.classList.remove("appear");
            warning.classList.add("disappear");
        }
        } else if (e.keyCode === 38) {
            if (y < -140) {
                console.log("I wont go further than this.");
                warning.classList.add("appear");
            } else {
            y = y - 10;
            ctx3.clearRect(x, y + 10, 500, 500);
            ctx3.drawImage(canvas2, x, y);
            warning.classList.remove("appear");
            warning.classList.add("disappear");
            }
        }
});

  
  

})();
