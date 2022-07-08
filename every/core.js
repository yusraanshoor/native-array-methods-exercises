// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  return input.every((num) => {
    return num % 2 === 0;
  });
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  return input.every((element) => {
    return typeof input[0] === typeof element;
  });
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  if (elementIsArray(input)) {
    return input.every((array) => {
      return array.every((element) => {
        return element > 0;
      });
    });
  }
}
function elementIsArray(matrix) {
  return matrix.every((array) => {
    return Array.isArray(array);
  });
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  let vowels = [a,e,i,o,u];
  if (isString(input)) {
    return input.every((element) => {
     return element.every((letter){
      let matchLetter = vowels.indexOf(letter)
      })
    });
  }
  return input;
}

function whatVowelsArePresent (array){
  let 
  let vowels = [a,e,i,o,u]
  array.map((element) => {
    element.map()
    let letters = element.split('')
     letters.map
    
  })
}

function isString(array) {
  return array.every((element) => {
    return typeof element === "string";
  });
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels,
};
