module.exports = function fn(a) {

    if (typeof a != "string" && Array.isArray(a) === false) {
        return null;

    } else if (Array.isArray(a) === true) {
        
        let newArray = [];
        for (var i = 0; i < a.length; i++) {
            if (typeof a[i] == "string") {
                newArray.splice(i, 0, a[i].split("").reverse().join(""));
            } else {
                newArray.splice(i, 0, null);
            } 
        }
        return newArray;

    }   return a.split("").reverse().join("");
};

// console.log(fn(["Funky Chicken", 90320]));
