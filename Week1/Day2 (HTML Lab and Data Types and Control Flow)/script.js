// console.log("test");

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


// adding the modal to the page with jQuery:

var $modal = $(".modal");
var $overlay = $("#overlay");
var $xButton = $("#x-button2");

function atPageLoad() {
    $modal.css({
        left: "35%",
        bottom: "45%",
    });
    $overlay.css({
        top: "0",
        bottom: "0",
        right: "0",
        left: "0",
    });
};

$xButton.on("click", function() {
$overlay.css({
    top: "",
    bottom: "",
    right: "",
    left: "",
});
$modal.css({
    left: "-500px",
    bottom: "",
});
});

window.addEventListener("load", function () {
setTimeout(atPageLoad, 1500);
});
