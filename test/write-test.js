const numVowels = require('../write.js');
const {expect, assert} = require('chai');

describe ('NumVowels', function() {

  it('Should be a function', function() {
    expect(numVowels).to.be.a('function','numVowels is not a function');
    assert.isFunction(numVowels, 'numVowels is not a function');
  });

  it('Should return 0 if no arguments are passed in.', function() {
    expect(numVowels()).to.equal(0);
    assert.equal(numVowels(),0);
  });

  it('Should return undefined if the arguments passed in are not strings', function() {
    expect(numVowels([1,2])).to.be.undefined;
  });

  it('Should add the number of vowels properly', function() {
    assert.equal(numVowels('a'),1);
    assert.equal(numVowels('aei'),3);
    assert.equal(numVowels('galvanize'),4);
  });

});
