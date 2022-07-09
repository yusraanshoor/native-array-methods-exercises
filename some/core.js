// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10(input) {
  return input.some((element) => {
    return element > 10;
  });
}

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord(input) {
  return input.some((string) => {
    return string.length > 10;
  });
}

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities(input) {
  return input.some((realArray) => {
    return realArray.some((element) => {
      return element === true;
    });
  });
}

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa(input) {
  return input.some((string) => {
    let words = string.split(" ");
    return words.some((word) => {
      return word === "Lost";
    });
  });
}

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa,
};
