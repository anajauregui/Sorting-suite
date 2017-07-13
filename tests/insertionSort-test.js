const { expect, assert } = require('chai');
const insertionSort = require('../scripts/insertionSort.js')

describe('insertionSort function', () => {

  it('should be a function', () => {
    assert.isFunction(insertionSort);
  })

  it('should be able to sort an array of letters', () => {
    let unsortedArray = ["d", "b", "a", "c"];

    expect(insertionSort(unsortedArray)).to.deep.equal(["a", "b", "c", "d"])
  })

  it('should be able to sort an array of numbers', () => {
    let unsortedArray = [5, 7, 1, 4];

    expect(insertionSort(unsortedArray)).to.deep.equal([1, 4, 5, 7])
  })

  it('should be able to sort negative numbers', () => {
    let unsortedArray = [-3, -1, -7, -5, -4];

    expect(insertionSort(unsortedArray)).to.deep.equal([-7,-5,-4,-3,-1])
  })


  it('should be able to sort a randomly-generated array', () => {
      let randomArray = [];
      let randomNumberCount = 7000;

      for (let i = 0; i < randomNumberCount; i++) {
        randomArray.push(Math.floor(Math.random() * (1000 - 100 + 1)) + 100)}

      let randomArrayCopy = Array.from(randomArray);

      expect(insertionSort(randomArray)).to.deep.equal(randomArrayCopy.sort(function (a, b) {
        return a - b
      }));
    })

})
