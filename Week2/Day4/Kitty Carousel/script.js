(function () {
    var kitties = document.querySelectorAll("#kitties img");
    var currKitty = 0;

    function moveKitties() {
        // console.log("were going to eventually move the kitties here!");

        // 1) kitty that is currently onscreen will need to be removed
        // 2) that kitty will need to be moved offscreen to the left
        // 3) the next kitty in queue needs to be moved onscreen

        kitties[currKitty].classList.remove("onscreen");
        kitties[currKitty].classList.add("exit-left");
        
        currKitty++;
        if (currKitty >= kitties.length) {
            currKitty = 0;
        }

        kitties[currKitty].classList.add("onscreen");

    

        setTimeout(moveKitties, 4000); //keeps the function going every 4secs and goes on indefinitely
    }

    setTimeout(moveKitties, 2000); //this starts the process/movement itself and lets you have 2secs to look at the first picture

    // when the kitty moves fully offscreen to the left, remove the exit-left class from it.
    // there is a slight complication however, transitioned also fires / runs whenever the transitoon to move a kitt onscreen completes
    // hower, we dont care about the transitioned for the kitty placed onscreen! we only care about the
    //ransitioned for kittty that was placed offscreen to the left

    // in this even listened, you need to detext which transition exactly just completed
    // take a closer look at your event object for help
    //

document.addEventListener("transitionend", function (e) {
    if (e.target.classList[0] === "exit-left") {
        e.target.classList.remove("exit-left");
    }
    // console.log(e.target.classList[0]);
});

})();
