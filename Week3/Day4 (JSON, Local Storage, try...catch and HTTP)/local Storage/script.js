// exercise: 
// Make a static HTML page that has a large <textarea> on it. When the user types in it, save 
// the value in localStorage. When the user comes back to the page after navigating away or closing the 
// browser, the stored value should automatically appear in the <textarea>.

var textarea = document.getElementById("textarea");


window.addEventListener("load", function () {
    var TextOnPageLoad = localStorage.getItem("savedText");
    var ShowTextAgain = JSON.parse(TextOnPageLoad);
    // console.log(ShowTextAgain);
    textarea.value = ShowTextAgain;
});

textarea.addEventListener("keydown", function () {
    var textOfTextarea;
    textOfTextarea = textarea.value;
    // console.log(textOfTextarea);
    console.log("i'm writing");
    var JSONText = JSON.stringify(textOfTextarea);
    // console.log(JSONText);
    localStorage.setItem("savedText", JSONText);
});







