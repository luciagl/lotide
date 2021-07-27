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

const letterPositions = function(sentence) {
  const results = {};
  for(let i = 0; i < sentence.length; i++) {
    let c = sentence[i];
    if(c !== ' ') {
      if(results[c] === undefined) {
        results[c] = [];
      }
      results[c].push(i);
    }
  }
  return results;
};

let res = letterPositions("hello");
// assertArraysEqual(res['h'], [0]);
// assertArraysEqual(res['e'], [1]);
// assertArraysEqual(res['l'], [2, 3]);
// assertArraysEqual(res['o'], [4]);

module.exports = letterPositions;