function multiplyBy10(array) {
  // your code here
  return array.map((element) => {
    return element * 10;
  });
}

function shiftRight(array) {
  // your code here
  let shiftRightArray = array.map((element, index) => {
    if (index !== array.length - 1) {
      return array[index];
    }
  });
  shiftRightArray.pop();
  shiftRightArray.unshift(array[array.length - 1]);
  return shiftRightArray;
}

function onlyVowels(array) {
  // your code here
  return array.map((word) => {
    let foundVowelsArray = word.match(/[aeiou]/gi);
    let foundVowelsString = foundVowelsArray.join("");
    return foundVowelsString;
  });
}

function doubleMatrix(array) {
  // your code here
  return array.map((realArray) => {
    return realArray.map((element) => {
      return element * 2;
    });
  });
}

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix,
};
