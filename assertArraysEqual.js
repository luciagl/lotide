const eqArrays = require('./eqArrays');

const assertArraysEqual = function(par1, par2) {
  if (!eqArrays(par1, par2)) {
    console.log('🛑🛑🛑 Assertion failed: arrays are not equal');
  } else {
    console.log('✅✅✅ Assertion passed: arrays are equal');
  }
};

module.exports = assertArraysEqual;