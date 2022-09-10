(function () {
    var currentPlayer = "player1";

    var allSlots = $(".slot");

    // console.log(allSlots);
    // console.log(typeof allSlots);
    // Object.values(allSlots)[5];
    // console.log(Object.values(allSlots)[5]);

    // reset button
    $("#button").on("click", function () {
        // console.log("i got clicked");
        window.location.reload();
    });

    $(".column").on("click", function (e) {
        // console.log("column was clicked");
        var col = $(e.currentTarget);
        var slotsInCol = col.children();
        // console.log("col clicked is ==> ", col);
        // console.log("slotsInCol: ", slotsInCol);

        // we're looping through the slots in the column starting from the bottom

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                slotsInCol.eq(i).addClass(currentPlayer);
                break;
            }
        }

        if (i === -1) {
            console.log("column is full - dont switch players!!");
            return;
        }

        var slotsInRow = $(".row" + i);
        // console.log("slots in row: ", slotsInRow);

        if (checkForVictory(slotsInCol)) {
            console.log("victory in column!!!!!");
            $("body").css("animation", "1s infinite winner");
            setTimeout(function () {
                alert(currentPlayer + " won!!!");
            }, 2000);
            return;
        } else if (checkForVictory(slotsInRow)) {
            console.log("victory in row!!!!!");
            $("body").css("animation", "1s infinite winner");
            setTimeout(function () {
                alert(currentPlayer + " won!!!");
            }, 2000);
            return;
        } else if (loopThroughDiagonals(diagonals)) {
            console.log("victory diagonally!!!!!");
            $("body").css("animation", "1s infinite winner");
            setTimeout(function () {
                alert(currentPlayer + " won!!!");
            }, 2000);
            return;
        }

        switchPlayer();
    });

    function switchPlayer() {
        if (currentPlayer === "player1") {
            currentPlayer = "player2";
            $("#animationPlayer2").addClass("spinCoin");
            $("#animationPlayer1").removeClass("spinCoin");
        } else {
            currentPlayer = "player1";
            $("#animationPlayer1").addClass("spinCoin");
            $("#animationPlayer2").removeClass("spinCoin");
        }
    }

    function checkForVictory(slots) {
        var count = 0;

        for (var i = 0; i < slots.length; i++) {
            // console.log(slots.eq(i).hasClass(currentPlayer));

            if (slots.eq(i).hasClass(currentPlayer)) {
                count++;
                if (count === 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    // this also would have worked (if i had hardcoded EVERY single possibility, but it felt
    // like cheating, so my solution is further down):

    // function checkForVictoryDiagonal() {
    //     if (allSlots.eq(5 && 10 && 15 && 20).hasClass(currentPlayer)) {
    //         return true;
    //     }
    // }

    var diagonals = [
        [0, 7, 14, 21],
        [1, 8, 15, 22],
        [2, 9, 16, 23],
        [3, 8, 13, 18],
        [4, 9, 14, 19],
        [5, 10, 15, 20],
        [6, 13, 20, 27],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 14, 19, 24],
        [10, 15, 20, 25],
        [11, 16, 21, 26],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
        [14, 21, 28, 35],
        [15, 20, 25, 30],
        [16, 21, 26, 31],
        [17, 22, 27, 32],
        [18, 25, 32, 39],
        [19, 26, 33, 40],
        [20, 27, 34, 41],
        [21, 26, 31, 36],
        [22, 27, 32, 37],
        [23, 28, 33, 38],
    ];

    function loopThroughDiagonals(arr) {
        for (let i = 0; i < arr.length; i++) {
            // console.log("looping through the array: ", arr[i]);
            // console.log(Array.isArray(arr[i]));
            arr[i].every(checkClass);
            function checkClass(j) {
                return allSlots.eq(j).hasClass(currentPlayer);
            }
            if (arr[i].every(checkClass)) {
                return true;
            }
        }
    }

    //  console.log("die loop funktion sagt: ", loopThroughDiagonals(diagonals));
})();

// alternative for if statement
// currentPlayer === "player1"
//     ? (currentPlayer = "player2")
//     : (currentPlayer = "player1");
