console.log("hi");

(function () {
    // var box = document.getElementById("box");
    // var left = box.offsetLeft;
    // // console.log("box: ", box);
    // // console.log("original left position: ", left);

    // function moveBox() {
    //     // decreases the left value:
    //     left--;
    //     // left -= 2;    --> to make it move faster

    //     //to bring it back once its out of the screen:
    //     if (left <= -150) {
    //         console.log("box is way off too the left, lets bring it back ");
    //         left = 500;
    //     }
    //     console.log("left after decrementing ", left);
    //     // assigning the new left values to the CSS stylesheet:
    //     box.style.left = left + "px";
    //     // calls the function over and over again:
    //     requestAnimationFrame(moveBox);
    // }
    // moveBox();

    var headlines = document.getElementById("headlines"); // element itself
    var left = headlines.offsetLeft; //starting left position of element
    var links = document.getElementsByTagName("a");
    var reqId; // for part 2, here i defign it globally, later in the moveHeadlines function i assign it a new local value.

    // console.log("links: ", links); //array-like object

    // console.log("headlines ", headlines);
    // console.log("left position of headlines: ", left);

    function moveHeadlines() {
        // deacrease value of left by 1px
        // check if the 1st link is offscreen
        left -= 1;

        if (left <= -links[0].offsetWidth) {
            console.log("first link is offscreen!");
            left += links[0].offsetWidth;
            console.log("left after moving it right: ", left);
            headlines.appendChild(document.getElementsByTagName("a")[0]);
        }
        // console.log("left value after decrementing: ", left);
        headlines.style.left = left + "px";

        reqId = requestAnimationFrame(moveHeadlines);
    }
    moveHeadlines(); // you need to call the function in order for it to work

    // lesson two, makes the loop stop, hightlight link, afterwards go on and remove highlight:

    for (var i = 0; i < links.length; i++) {
        console.log(links[i]);

        links[i].addEventListener("mouseenter", function (e) {
            console.log("e", e);
            // to do: 1) make the ticker stop 2) highlight link
            e.currentTarget.style.fontSize = "18px"; // oder: this
            this.style.color = "red";
            e.currentTarget.style.fontStyle = "italic";
            cancelAnimationFrame(reqId); //makes the animationframe stop at the point of time when the mouse enters it
            console.log(reqId);
        });

        links[i].addEventListener("mouseleave", function (e) {
            console.log("left this element", e.target);
            // to do: 1) restart ticker 2) update style of the link again
            e.currentTarget.style.fontSize = "16px";
            e.currentTarget.style.color = "";
            e.currentTarget.style.fontStyle = "";
            moveHeadlines(); // make the animationframe start again
        });
    }
})();
