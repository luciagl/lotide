const assert = require('chai').assert;
const middle = require('../middle');
//const assertArraysEqual = require('../assertArraysEqual');

describe("#head", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });  
});

//assertArraysEqual(middle([1, 2, 3]), [2]); 