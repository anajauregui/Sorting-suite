const quickSort = (arr) => {
  var pivot = arr[arr.length - 1];
  var left = [];
  var right = [];

  if (arr.length <= 1) return arr;

  for(var i = 0; i < arr.length -1; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = quickSort
