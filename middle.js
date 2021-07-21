const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(par1, par2) {
  if (!eqArrays(par1, par2)) {
    console.log('🛑🛑🛑 Assertion failed: arrays are not equal');
  } else {
    console.log('✅✅✅ Assertion passed: arrays are equal');
  }
};

const middle = function(arr) {
  let newArr = [];
  if (arr.length <= 2) {
    return newArr;
  }
  let idx = Math.round(arr.length / 2) - 1; 
  if (arr.length % 2 !== 0) {
    newArr.push(arr[idx]);
  } else if (arr.length % 2 === 0) {
    newArr.push(arr[idx]);
    newArr.push(arr[idx + 1]);
  }
  return newArr;
}

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]