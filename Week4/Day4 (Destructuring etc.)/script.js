
const firstArr = [1, 2, 3, 4, 5];
const secondArr = [10, 20, 30, 40, 50, 60, 70];
const thirdArr = [100, 200];

//// Exercise 1:
// Write a function that takes an array as an argument and returns a new array containing all of the items that 
// are in the array that was passed in but in reverse order.


function changeArray (arr) {
    const [...newArray] = arr;
    return newArray.reverse();
};

console.log(changeArray(secondArr));


//// Exercise 2:
// Write a function that takes two arrays as arguments and returns a 
// new array containing all of the items in the two arrays passed to it. 


function addArray (arr1, arr2) {

    return [...arr1, ...arr2];
}

console.log(addArray(firstArr, thirdArr));


//// Exercise 3:
// Rewrite the following function to use destructuring assignment for the three variables it creates:

// function logInfo(city) {
//     const name = city.name;
//     const country = city.country;
//     const numPeople = city.population;

//     console.log(
//         `${name} is in ${country} and has ${numPeople} inhabitants in it.`
//     );
// }

// The three highlighted lines should be replaced with a single line (and you shouldn't change anything else).


 function logInfo(city) {
     const { name, country, population:numPeople } = city;

     console.log(
         `${name} is in ${country} and has ${numPeople} inhabitants in it.`
     );
 }

//  This is how you would call it:

logInfo({ name: "Marseille", country: "France", population: 861635 });



//// Exercise 4:
// Pretend that it is 2002 and rewrite the following hipster Javascript so it will work in Internet Explorer 5 and Netscape 4.

// let getNameAndCountry = ({ name, country }) => [name, country];

// let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
//     let [, country] = getNameAndCountry(city2);
//     return {
//         ...city1,
//         country,
//     };
// };

var city1 = {
    name: "Minsk",
    country: "Belarus",
}

var city2 = {
    name: "Moscow"
}


var getNameAndCountry = ({ name, country }) => [name, country];

var getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
    let [, country] = getNameAndCountry(city2);
    return {
        ...city1,
        country,
    };
};

// first one, done:
function getNameAndCountry (obj) {
    return [obj.name, obj.country]
}

// second one:
// takes two objects as parameters and checks if the second one has a property name of country. if not, it assigns it the property
// name of "Germany". Then it takes the string it gets from the getNameAndCountry function and takes the second index of it and "names" 
// it country
function getRelocatedCity (obj1, obj2) {
    
    }

console.log(getNameAndCountry(test));
console.log(getRelocatedCity(test));