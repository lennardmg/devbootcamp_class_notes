// Exercise 1

// Write a function called each that accepts either an object or an array as
// its first parameter and a callback as its second parameter.
// If the first parameter is an object, it should loop over the object's properties and call the callback for each one.
// The property value should be the first parameter passed to the callback and the property name should be the second.
// If the first parameter is an array, it should loop over the array's elements and call the callback for each one.
// The array element should be the first parameter passed to the callback and the index should be the second.

each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

each(["a", "b", "c"], function (val, idx) {
    console.log("The value of item " + idx + " is " + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'

// is objArr an object?
// if yes loop over object properties/keys
// get to the values of the keys
// and their values!
// -> pass values and keys to the callback

// is objArr an array?
// if yes, loop over the array elements
// get to the elements in the array
// and their index position
// -> pass element values, and index to callback#

function each(objArr, callback) {
    var typeParam = typeof objArr;
    console.log("typeParam", typeParam);
    if (typeParam === "object") {
        if (Array.isArray(objArr)) {
            console.log("array");
            for (var i = 0; i < objArr.length; i++) {
                console.log("index ", i, "value", objArr[i]);
                callback(objArr[i], i);
            }
        } else {
            console.log("itsnotanarraybutactuallyanobject");
            for (var key in objArr) {
                console.log(
                    "key of object\t",
                    key,
                    "value of the key\t",
                    objArr[key]
                );
                callback(objArr[key], key);
            }
        }
    } else {
        console.log("itsneitherobjectnorarray");
    }


// var obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };

// for (var p in obj) {
//     console.log("The value of obj." + p + " is " + obj[p]);
// }







// Exercise 2
// Write a function that takes an array as a parameter and returns a new array containing all of the items that
// are in the array that was passed in but in reverse order.
// Unlike the reverse method that all arrays have, this function should leave the original array unchanged.

var originalArray = [1, 2, 3, 4, 5, 6];

function reversedArray(array) {
    var array2 = array.slice();
    return array2.reverse();
    //var array2 = array.slice().reverse();
}

console.log("the reversed array " + reversedArray(originalArray));
console.log("the original array " + originalArray);
// Note to myself: to practice, take single indexes and unshift them one by one with a for loop










// Exercise 3
// Write a function called getLessThanZero that expects an array of numbers to be passed to
// it and returns a new array containing only those numbers from the array that was passed in that are less than zero.

var randomNumbers = [1, 2, -1, -90, 10, -362, 14, 6352, -99];

function getLessThanZero(array) {
    var negativeNumbers = [];
    negativeNumbers = array.filter(function (number) {
        return number < 0;
    });
    return negativeNumbers;
}

console.log(
    "only negative numbers from the array " + getLessThanZero(randomNumbers)
);
console.log("the original arrray " + randomNumbers);
