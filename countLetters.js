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

const countLetters = function(str) {
  let result = {};
  for (let c of str) {
    if(c !== ' ') {
      if(result[c] === undefined) {
        result[c] = 1;
      } else {
        result[c]++;
      }
    }
  }
  return result;
}


//console.log(countLetters("l i l "));
//console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;