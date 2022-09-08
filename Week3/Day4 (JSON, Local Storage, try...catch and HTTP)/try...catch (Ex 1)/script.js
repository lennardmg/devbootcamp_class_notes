
// Exercise 1:
// Make a JSON validator website. It should have a <textarea> where users can input their JSON. 
// After clicking a button a message should appear, telling users if the JSON is valid or not.

var button = document.getElementById("button");
var textfield = document.getElementById("jsonTester");

function isValidJson(variable) {
    try {
        JSON.parse(variable);
        // console.log(newJsonVar);
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}


var test = {"text":"hallo","age":31}

// var testJSON = JSON.stringify(test);
// console.log("test: ", test);
// console.log("testJSON: ", testJSON);
// console.log(isValidJson(test));


button.addEventListener("click", function() {

    var textOfTextfield = textfield.value;

    // console.log("textfieldvalue: ", textfield.value);
    // console.log("TextOfTextfield: ", textOfTextfield);
    // console.log(isValidJson(textOfTextfield));

    if (isValidJson(textOfTextfield) === true) {
        alert("You've done well, it IS indeed a JSON");
    }
    if (isValidJson(textOfTextfield) === false) {
        alert("It is no JSON unfortunately, try a bit harder");
    }
    // console.log(typeof TextOfTextfield);
});
