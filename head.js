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
    str = 'Failed'
  }
  
  console.log(`${emo} Assertion ${str}: ${actual} ${result} ${expected}`);
};

const head = function(arg1, arg2) {
  return arg1[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);