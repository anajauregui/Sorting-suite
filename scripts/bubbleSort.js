const letters = ["d", "b", "a", "c"]

const bubbleSort = (array) => {
  let count = 0;

  for (let i = 0; i < array.length; i++) {

    for(let j = 0; j < array.length - i; j++) {

      if(array[j] > array[j + 1]) {
       [ array[j], array[j + 1]] = [ array[j + 1], array[j] ]
      }

    count++
    }
  }
  return array
}


module.exports = bubbleSort
