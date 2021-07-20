// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result;
  let emo;
  let str;
  if (actual === expected) {
    result = '===';
    emo = '✅✅✅';
    str = 'Passed';
  } else {
    result = '!==';
    emo = '🛑🛑🛑';
    str = 'Failed';
  }
  
  console.log(`${emo} Assertion ${str}: ${actual} ${result} ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);