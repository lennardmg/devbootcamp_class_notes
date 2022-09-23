var divider = document.querySelector(".divider");
var container = document.querySelector(".container");
var leftPane = document.querySelector(".leftPane");

function mouseMove(e) {
    // ensure the events target is the '.container'
    if (e.target === e.currentTarget) {
        divider.style.left = leftPane.style.width = e.offsetX;
    }
}

divider.addEventListener(
    "mousedown",
    function (e) {
        container.addEventListener("mousemove", mouseMove);
    }
    // { capture: true }
);

document.addEventListener("mouseup", function () {
    container.removeEventListener("mousemove", mouseMove);
});
