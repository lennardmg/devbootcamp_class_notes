
// Exercise 2:
// Write a function called translateNumberToGerman that tries to get a number between 1 and 10 by calling another 
// function called askForNumber. Here is the askForNumber function you should use:

var resultBox = document.getElementById("resultBox");

function askForNumber() {
    var num = prompt("Please enter a number between 1 and 10");
    if (num >= 1 && num <= 10 && num == parseInt(num)) {
        return num;
    } 
    askForNumber();
    throw new Error("Bad number");
}

var testValue = askForNumber();

// console.log("this is the test Value: ", testValue);
// console.log("the type of test Value: ", typeof testValue);

var theNumberVersionOfIt = parseInt(testValue);

console.log("after parseInt: ", theNumberVersionOfIt);
// console.log(typeof theNumberVersionOfIt);


// If askForNumber returns a number between 1 and 10, translateNumberToGerman should return the 
// German translation of that number as a string.

// If askForNumber does not return a number between 1 and 10 and instead throws an exception, translateNumberToGerman 
// should log the error message to the console and restart the whole process. 
// The user should keep being prompted to input a number between 1 and 10 until she does so.


function translateNumberToGerman () {
    // var convertToNum = parseInt(askForNumber());
    switch (theNumberVersionOfIt) {
        case 1:
            resultBox.innerText = "Eins";
            break;
        case 2:
            resultBox.innerText = "Zwei";
            break;
        case 3:
            resultBox.innerText = "Drei";
            break;
        case 4:
            resultBox.innerText = "Vier";
            break;
        case 5:
            resultBox.innerText = "Fünf";
            break;
        case 6:
            resultBox.innerText = "Sechs";
            break;
        case 7:
            resultBox.innerText = "Sieben";
            break;
        case 8:
            resultBox.innerText = "Acht";
            break;
        case 9:
            resultBox.innerText = "Neun";
            break;
        case 10:
            resultBox.innerText = "Zehn";
            break;
    }
};

translateNumberToGerman();



