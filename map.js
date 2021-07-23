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

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    // console.log(item);
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word);
//const results1 = map(words, word => word[0]);

console.log(results1);
console.log(assertArraysEqual(results1, ["to", "major"]));
console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]));
console.log(assertArraysEqual(results1, ["ground", "control", "to", "major", "tom"]));
