// const countries = require('./countries');
const { find } = require("./countries");

// console.log(countries);
// console.log(find);



//// 1) When find is passed an empty string, it returns an empty array
test("returns an empty array if string is empty", () => {
    const emptyString = find("");
    expect(emptyString).toStrictEqual([]);
});


//// 2) The array that it returns contains no more than four matches
test("returns no more than four matches", () => {
    const fourCountries = find("T");
    const fourCountries2 = find("Y");
    expect(fourCountries.length).toBeLessThanOrEqual(4);
    expect(fourCountries2.length).toBeLessThanOrEqual(4);
});


//// 3) The search is case insensitive
test("is case sensitive", () => {
    const caseSensitivityUp = find("T");
    const caseSensitivityLow = find("t");
    expect(caseSensitivityUp).toEqual(caseSensitivityLow);
});

//// 4) If there are no matching countries, an empty array is returned
test("returns an empty array if no countries were found", () => {
    const emptyString = find("X");
    expect(emptyString).toStrictEqual([]);
});