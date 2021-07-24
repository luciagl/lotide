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

const findKeyByValue = function(obj, val) {
  let result;
  for (let i in obj) {
    if (obj[i] === val) {
      result = i;
    } else {
      console.log('fgdg');
      result = undefined;
    }
  }
  return result;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
