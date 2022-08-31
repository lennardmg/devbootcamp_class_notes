// Exercise 1

logType = [4, 5];

if (typeof logType === "undefined") {
    console.log('"undefinied!"');
} else if (typeof logType === "null") {
    console.log('"null!"');
} else if (typeof logType === "number" && isNaN(logType)) {
    console.log('"not a number!"');
} else if (typeof logType === "number") {
    console.log('"number!"');
} else if (typeof logType === "string") {
    console.log('"string!"');
} else if (typeof logType === "boolean") {
    console.log('"boolean!"');
} else if (typeof logType === "bigint") {
    console.log('"bigint!"');
} else if (typeof logType === "function") {
    console.log('"function!"');
} else if (typeof logType === "object" && Array.isArray(logType)) {
    console.log('"array!"');
} else if (typeof logType === "object") {
    console.log('"object!"');
} else {
    console.log('"I have no idea!"');
}

// Exercise 2
var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

for (var b in a) {
    console.log(a[b] + ": " + "'" + b + "'");
}

// Exercise 3

var number = 10;
while (number >= 1) {
    console.log(number);
    number = number - 1;
}
