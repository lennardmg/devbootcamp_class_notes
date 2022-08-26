var x = 684;
var doubleX;

function timesTwo(number) {
    return number * 2;
}

doubleX = timesTwo(x);

var numbers = [x, doubleX];

// for of loops through arrays
for (var element of numbers) {
    console.log(element);
}

numbers = {};
numbers.y = doubleX;
