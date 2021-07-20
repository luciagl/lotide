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

const head = function(arg1, arg2) {
  return arg1[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);