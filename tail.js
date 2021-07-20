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

const words = ["Yo Yo", "Lighthouse", "Labs"];
const tail = function(words) {
  let result = words.slice(1);
  return result;
};

assertEqual(tail(words).length, 2);
