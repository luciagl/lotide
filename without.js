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

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let toRemove = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        toRemove = true;
      }
    }
    if (!toRemove) {
      result.push(source[i]);
    }
  }
  return result;
};

//without([1, 2, 3], [1]) // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// const result = without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(result, ["hello", "world"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;