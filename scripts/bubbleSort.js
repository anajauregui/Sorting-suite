const letters = ["d", "b", "a", "c"]

const bubbleSort = (array) => {
  let count = 0;

  // console.log(array)

  for (let i = 0; i < array.length; i++) {

    for(let j = 0; j < array.length - i; j++) {

      if(array[j] > array[j + 1]) {
       [ array[j], array[j + 1]] = [ array[j + 1], array[j] ]
      }

    count++
    // console.log('count: ', count)
    // console.log(array)

    }
  }
  return array
}

// export default bubbleSort
module.exports = bubbleSort
