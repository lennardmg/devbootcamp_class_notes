var selectLi = document.querySelectorAll("#myList>li");

//will select all of the li's and change the background color
selectLi.forEach(function (list) {
    list.style.backgroundColor = "blue";
});

//adding new elements
var newHeader = document.createElement("header");
var headerH1 = document.createElement("h1");
var text = document.createTextNode("Welcome to our page.");
var headerH3 = document.createElement("h3");
var text2 = document.createTextNode("Welcome to my H3");

//attaching text to the header h1
headerH1.appendChild(text);
headerH3.appendChild(text2);
//attaching the h1 to the header
newHeader.append(headerH1, headerH3);

//append moves to the back, prepend moves to the front
document.body.prepend(newHeader);

//
//
// exercise 1:
// Write a function that expects a string representing a selector to be passed as a parameter.
// The function should find all the elements in the document
// that match the selector and change their style so that the text they contain is italic, underlined, and bold.

function chooseAllElements(selector) {
    var findThem = document.querySelectorAll(selector);
    findThem.forEach(function (blabla) {
        blabla.style.fondStyle = "italic";
        blabla.style.fondWeight = "bold";
        blabla.style.textDecoration = "underline";
    });
}

chooseAllElements(".myDiv");

// exercise 2:
// Write a function that expects a string representing a class name to be passed as a parameter.
// The function should return an array containing all the elements in the document that have the class that was passed in.

function className(string) {
    var allClasses = document.getElementsByClassName(string);
    console.log(allClasses);
    var anything = [];
    for (i = 0; i < allClasses.length; i++) {
        anything.push(allClasses[i]);
    }
    console.log(anything);
    return anything;
}

className("test");

// exercise 3:
// Write a function that inserts an element into the body of the currently loaded page. That element should have fixed position,
// z-index of 2147483647, left of 20px, top of 100px, font-size of 200px, and contain the text 'AWESOME'.
var newElement = document.createElement("p");
newElement.classList.add("myNewP");
var textInNewElement = document.createTextNode("AWESOME");
newElement.appendChild(textInNewElement);
document.body.prepend(newElement);
// why doesnt it move it before my <UL<? i used the .prepend ??

var changeNewPSecondTry = document.querySelector(".myNewP");
changeNewPSecondTry.style.position = "fixed";
changeNewPSecondTry.style.fontSize = "200px";
changeNewPSecondTry.style.zIndex = "2147483647";
changeNewPSecondTry.style.left = "20px";
changeNewPSecondTry.style.top = "100px";

// var changeNewP = function () {
//     document.getElementsByClassName("myNewP")[0].style.position = "fixed";
//     document.getElementsByClassName("myNewP")[0].style.zIndex = "2147483647";
//     document.getElementsByClassName("myNewP")[0].style.left = "20px";
//     document.getElementsByClassName("myNewP")[0].style.top = "100px";
//     document.getElementsByClassName("myNewP")[0].style.fontSize = "200px";
// };
//
// why doesnt this work???
