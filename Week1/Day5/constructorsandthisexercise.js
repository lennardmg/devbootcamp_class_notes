// Exercise 1:

// Write a constructor called Rectangle that accepts two numbers (width and height) as parameters.
// Rectangle instances should have a method called getArea that returns the instance's width multiplied by its height.
// Write another constructor called Square that accepts one number (which will serve as both width and the height) as a parameter.
// Instances of Square should also have a getArea method but you should not rewrite the getArea function you wrote for Rectangle.
// Square instances should use the same getArea method that Rectangle instances do.

// Prototype for Rectangle
Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

var smallRectangle = new Rectangle(10, 5);
console.log(smallRectangle.getArea());

// Prototype for Square
Square.prototype = Rectangle.prototype;

function Square(num) {
    this.width = num;
    this.height = num;
}

var smallSquare = new Square(7);
console.log(smallSquare.getArea());

// had to add a console.log() because i didnt put an automatical one in my getArea function.
var square = new Square(4);
console.log(square.getArea()); //16

var rect = new Rectangle(4, 5);
console.log(rect.getArea()); //20

// Exercise 2

// Write a function called invertCase that expects a string as a parameter.
// This function should return a new string with all the same characters as the string that was passed in
// but with the cases of the alphabetic characters switched. Uppercase characters should become lowercase
// and lowercase letters should become uppercase. Characters that are not alphabetic should not change.
// The toUpperCase and toLowerCase methods that all strings have will come in handy here.
