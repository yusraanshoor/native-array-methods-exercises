function onlyEven(array) {
  // your code here
  return array.filter((element) => {
    return element % 2 === 0;
  });
}

function onlyOneWord(array) {
  // your code here
  return array.filter((element) => {
    return element.length === element.replaceAll(" ", "").length;
  });
}

function positiveRowsOnly(array) {
  // your code here
  return array.filter((array) => {
    return array.every((element) => {
      return element > 0;
    });
  });
}

function allSameVowels(array) {
  // your code here
  return array.filter((word) => {
    let re = /[aeiou]/gi;
    let found = word.match(re);
    return found.every((vowel) => {
      return found[0] === vowel;
    });
  });
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels,
};
