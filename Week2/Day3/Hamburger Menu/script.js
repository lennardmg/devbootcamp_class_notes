// console.log("it works");

var moveBox = document.getElementById("move");
var box = document.getElementById("box");
var moveBack = document.getElementById("moveBack");
var shape = document.getElementsByClassName("toggle-shape")[0];

// console.log("moveBox", move);
// console.log("box", box);

moveBox.addEventListener("click", function () {
    // console.log("event on click: ", e);
    box.classList.add("move-right");
});

moveBack.addEventListener("click", function (event) {
    event.stopPropagation(); //you need this, when the parent element also has an eventlistener
    // console.log("event on click: ", e);
    box.classList.remove("move-right");
});

// with box.classList.toggle("move-right");  you could also do it at once. it checks if a element has a class --> removes it, if not --> adds it.

shape.addEventListener("click", function () {
    box.classList.toggle("circle");
});
