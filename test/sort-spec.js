const chai = require('chai');
const bubbleSort = require('./../index.js');

chai.should();

describe('bubbleSort', () => {

  it('should correctly sort an array of numbers', () => {
    let randomArr = [9, 2, 4, 5, 1];
    bubbleSort(randomArr).should.deep.equal([1,2,4,5,9]);
  });

  it('should throw an error if anything other than an array has been used', () => {
    let stringVal = 'hello';
    bubbleSort(stringVal).should.throw(Error);
  });

  it('should throw an error if array contains value other than a number', () => {
    let stringArr = ['nine', 3, 1, 3];
    let objArr = [{hello: "hello"}, 1, 3];
    let boolArr = [false, 7, 9];
    let nullArr = [null, 1];

    bubbleSort(stringArr).should.throw(Error);
    bubbleSort(objArr).should.throw(Error);
    bubbleSort(boolArr).should.throw(Error);
    bubbleSort(nullArr).should.throw(Error);
  });

  it('should correctly return an array that has duplicates of the same value', () => {
    let randomArr = [1, 1, 1, 8, 4];
    bubbleSort(randomArr).should.deep.equal([1,1,1,4,8]);
  });

});