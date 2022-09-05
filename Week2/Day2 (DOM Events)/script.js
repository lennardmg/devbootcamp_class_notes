// exercise 1
// Make a page that has on it an element that is 100px by 100px in size, has absolute positioning, and has a solid background color.
// Add an event handler that makes this box center itself directly under the user's mouse pointer as it is moved across the screen.

var centerBox = document.getElementsByClassName("centerBox")[0];

document.addEventListener("mousemove", function (e) {
    centerBox.style.left = e.pageX - 50 + "px";
    centerBox.style.top = e.pageY - 50 + "px";
    console.log("mouse moved");
});

// exercise 2
// Make a page that has a <textarea> element on it. As the user types visible characters into this field,
// the characters should be replaced with the characters in the corresponding position in the Gettysburg Address.
// (Note - you can get and set the text in a <textarea> through its value property.)

var textArea = document.getElementsByClassName("textarea")[0];
var strangeText =
    "Four score and seven years ago our fathers brought forth on this continent, a new nation, \
conceived in Liberty, and dedicated to the proposition that all men are created equal. \
Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and dedicated, \
can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, \
as a final resting place for those who here gave their lives that that nation might live. \
It is altogether fitting and proper that we should do this. \
But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. \
The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. \
The world will little note, nor long remember what we say here, but it can never forget what they did here. \
It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus \
far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from \
these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that \
we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of \
freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.";

var i = 0;
textArea.value = "";

textArea.addEventListener("keydown", function (e) {
    e.preventDefault();
    textArea.value += strangeText[i];
    i++;
});

//exercise 3:
// Make a page that has on it an element that is 100px by 100px in size and has a solid black border.
// When the user mouses down on this box, its background should change to a randomly selected color.
// When the user mouses up on it, its background should change to another randomly selected color.

var colorChange = document.getElementsByClassName("colorChange")[0];

colorChange.addEventListener("mousedown", function (e) {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    colorChange.style.backgroundColor = "#" + randomColor;
});
colorChange.addEventListener("mouseup", function (e) {
    colorChange.style.backgroundColor = "";
});

//exercise 4:
// Make a page that has on it an element that is 200px by 200px in size and has a solid background color.
// Nest within that element another element that is 50px by 50px in size and has a different solid background color.
// When the user clicks on the outer element its background color should change to a randomly selected color. However,
// if the user clicks on the inner element, the inner element's background color should
// change to a randomly selected background color but the outer element's background color should not change at all.

var outerBox = document.getElementsByClassName("outerBox")[0];
var innerBox = document.getElementById("innerBox");

outerBox.addEventListener("mousedown", function (e) {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;
});
