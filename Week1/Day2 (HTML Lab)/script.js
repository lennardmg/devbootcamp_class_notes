console.log("test");

var menuButton = document.getElementById("menu-button");
var menu = document.getElementsByClassName("menu")[0];
var overlay = document.getElementById("overlay");
var xButton = document.getElementById("x-button");

menuButton.addEventListener("click", function () {
    menu.style.right = "0px";
    overlay.style.top = "0";
    overlay.style.bottom = "0";
    overlay.style.right = "0";
    overlay.style.left = "0";
});

xButton.addEventListener("click", function () {
    menu.style.right = "-300px";
    overlay.style.top = "";
    overlay.style.bottom = "";
    overlay.style.right = "";
    overlay.style.left = "";
});

overlay.addEventListener("click", function () {
    menu.style.right = "-300px";
    overlay.style.top = "";
    overlay.style.bottom = "";
    overlay.style.right = "";
    overlay.style.left = "";
});

// for when pressing the ESC button:
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) {
        menu.style.right = "-300px";
        overlay.style.top = "";
        overlay.style.bottom = "";
        overlay.style.right = "";
        overlay.style.left = "";
    }
});
