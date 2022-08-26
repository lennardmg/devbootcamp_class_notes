// Exercise 1

function sum() {
    var amountOfArguments = arguments.length;
    var numSum = 0;
    var i = 0;
    while (i < amountOfArguments) {
        numSum = numSum + arguments[i];
        i++;
    }
    return numSum;
}
// console.log(sum(10, 3, 6));
console.log(sum(4, 7, 3, 5, 6, 2, 10));

// Exercise 2

function waitThenRun() {
    setTimeout(function () {
        console.log("Hello!");
        setTimeout(function () {
            console.log("Goodbye!");
        }, 1500);
    }, 1500);
}

console.log(waitThenRun);

// second solution

function waitThenRun(func) {
    setTimeout(func, 1500);
}

waitThenRun(function () {
    console.log("Hello!");
    waitThenRun(function () {
        console.log("Goodbye!");
    });
});

// Exercise 3
// Write a function that expects a number as an argument. If the value that is passed in is less than 0, equal to 0,
// or not a number, the function should return the string 'ERROR'. If the number that is passed in is
// greater than or equal to 1000000 it should simply return the number. Otherwise it should multiply
// the number by 10 however many times it takes to get a number that is greater than or equal to 1000000 and return that.

function strangeNumbers(number) {
    if (number <= 0 || isNaN(number) || typeof number !== "number") {
        return "ERROR";
    } else if (number > 0 && number < 1000000) {
        console.log("I am in the if");
        while (number < 1000000) {
            number = number * 10;
        }
        return number;
    } else {
        return number;
    }
}

console.log(strangeNumbers(273));
