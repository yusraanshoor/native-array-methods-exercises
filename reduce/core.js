function sum(array) {
  // your code here
  return array.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);
}

function productAll(array) {
  // your code here
  let result = 1;
  array.forEach((realArray) => {
    result *= arrayProduct(realArray);
  });
  return result;
}

function arrayProduct(array) {
  return array.reduce((previousValue, currentValue) => {
    return previousValue * currentValue;
  }, 1);
}
function objectify(array) {
  // your code here
  let obj = {};
  array.forEach((realArray) => {
    realArray.reduce((previousValue, currentValue) => {
      return (obj[previousValue] = currentValue);
    });
  });
  return obj;
}

function luckyNumbers(array) {
  // your code here
  return array.reduce((previousValue, currentValue, index) => {
    if (index !== array.length - 1) {
      return previousValue + currentValue + ", ";
    } else {
      return previousValue + "and " + currentValue;
    }
  }, "Your lucky numbers are: ");
}

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers,
};
