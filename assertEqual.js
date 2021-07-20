// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result;
  let emo;
  if (actual === expected) {
    result = '===';
    emo = '✅✅✅';
  } else {
    result = '!==';
    emo = '🛑🛑🛑';
  }
  
  console.log(`${emo} Assertion Passed: ${actual} ${result} ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);