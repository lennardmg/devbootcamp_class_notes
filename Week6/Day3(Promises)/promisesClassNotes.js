////// with everything that is running in the background (asynchronous), promises can be used. Its more or less the modern standard

var myPromise = new Promise(function(resolve, reject) {
    setTimeout(function () {
        resolve("success!")
    }, 2000);
})

console.log(myPromise);


// "then" happens at success, "catch" at reject/fail
myPromise.then(function(result) {
    console.log("result: ", result);
    console.log(myPromise);
    return result; // the "result" of a promise is also a callback function
}).then(function(result2) {
    console.log("result2: ", result2);
}).catch(function(err) {
    console.log("ERROR ", err);
});

console.log("after the promise (wont show up after the promise tho...) ");





var { readdir } = require("fs");
var { promisify } = require("util");

var readdirPromise = promisify(readdir);


readdir(__dirname, function(err, files) {
    if (!err) {
        console.log(files.join(", "));
    }
});


readdirPromise(__dirname).then(function(result) {
    console.log("promise based: ", result.join(", "));
});


// .finally is a third method, which gets executed regardless if the promise is succesfull or not