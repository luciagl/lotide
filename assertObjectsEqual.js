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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if(!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if(object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (!eqObjects(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} != ${inspect(expected)}`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} == ${inspect(expected)}`);
  }
};

//const ab = { a: "1", b: "2" };
//const ba = { b: "2", a: "1" };
//assertObjectsEqual(ab, ba);

//const ab2 = { b: "1", a: "2" };
//assertObjectsEqual(ab, ab2);

module.exports = assertObjectsEqual;