(function () {
    var kitties = document.querySelectorAll("#kitties img");
    var dots = document.getElementsByClassName("dot");
    // console.log(dots);
    var currKitty = 0;
    var isTransitioning = false;
    var timer;

    function moveKitties(dotIdx) {
        // console.log("were going to eventually move the kitties here!");
        isTransitioning = true;

        console.log("dotIdx: ", dotIdx);
        if (dotIdx !== undefined) {
            console.log("currKitty: ", currKitty);
            currKitty = dotIdx;
        }

        kitties[currKitty].classList.remove("onscreen");
        dots[currKitty].classList.remove("on");
        kitties[currKitty].classList.add("exit-left");

        currKitty++;
        if (currKitty >= kitties.length) {
            currKitty = 0;
        }

        kitties[currKitty].classList.add("onscreen");
        dots[currKitty].classList.add("on");

        // console.log("the timer is: ", timer);
        timer = setTimeout(moveKitties, 5000); //keeps the function going every 4secs and goes on indefinitely
    }

    timer = setTimeout(moveKitties, 2000); //this starts the process/movement itself and lets you have 2secs to look at the first picture
    // console.log("the timer now is: ", timer);

    document.addEventListener("transitionend", function (e) {
        if (e.target.classList[0] === "exit-left") {
            e.target.classList.remove("exit-left");
            isTransitioning = false;
            // timer = setTimeout(moveKitties, 4000);
        }
        // console.log(e.target.classList[0]);
    });

    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function (e) {
            console.log("dotIndex clicked", e.target);
            // loop over all the dots and find the one that equals our target
            for (var j = 0; j < dots.length; j++) {
                if (e.target === dots[j]) {
                    console.log("you clicked on dot at index:", j);

                    // clearTimeout to stop and scheduled
                    // now you want to call your moveKitties function and pass to it,
                    // the dotIndex that got clicked
                    if (isTransitioning) {
                        console.log(
                            "cats are transitioning, your click will be ignored"
                        );
                        return;
                    }
                    if (j === currKitty) {
                        console.log(
                            "you clicked on the current dot, nothing will happen"
                        );
                        return;
                    }
                    // console.log("the timer is: ", timer);
                    clearTimeout(timer);
                    moveKitties(j);
                }
            }
        });
    }
})();
