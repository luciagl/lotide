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

// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []

// console.log(middle([1, 2, 3])); // => [2]
// console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]

// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

module.exports = middle;