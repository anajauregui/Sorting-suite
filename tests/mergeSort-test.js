const { expect, assert } = require('chai');
const {mergeSort, merge } = require('../scripts/mergeSort.js')

describe('mergeSort function', () => {

  it('should be a function', () => {
    assert.isFunction(merge);
  })

  it('should be able to sort an array of letters', () => {
    let unsortedArray = ["d", "b", "a", "c"];
    let sortedArray = mergeSort(unsortedArray);

    expect(mergeSort(sortedArray)).to.deep.equal(["a", "b", "c", "d"])
  })

  it('should be able to sort an array of numbers', () => {
    let unsortedArray = [5, 7, 1, 4];
    let sortedArray = mergeSort(unsortedArray);

    expect(mergeSort(sortedArray)).to.deep.equal([1, 4, 5, 7])
  })

  it('should be able to sort negative numbers', () => {
    let unsortedArray = [-3, -1, -7, -5, -4];
    let sortedArray = mergeSort(unsortedArray);

    expect(mergeSort(sortedArray)).to.deep.equal([-7, -5, -4, -3, -1])
  })


  it('should be able to sort a randomly-generated array', () => {
      let randomArray = [];
      let randomNumberCount = 7000;
      let sortedArray = mergeSort(randomArray);

      for (let i = 0; i < randomNumberCount; i++) {
        randomArray.push(Math.floor(Math.random() * (1000 - 100 + 1)) + 100)}

        let randomArrayCopy = Array.from(randomArray);

      expect(randomArray).to.deep.equal(randomArray);
      expect(mergeSort(sortedArray)).to.deep.equal(randomArrayCopy.sort(function (a, b) {
        return a - b
      }));
    })

})
