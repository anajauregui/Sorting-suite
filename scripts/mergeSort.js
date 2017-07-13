const mergeSort = (array) => {
let n = array.length;

if (n < 2) {
  return array;
}

let mid = Math.floor(n / 2);
let left = array.slice(0, mid);
let right = array.slice(mid)

return merge(mergeSort(left), mergeSort(right));
}

const merge = (leftArr, rightArr) => {
let result = [];

while ( leftArr.length && rightArr.length) {
  if (leftArr[0] < rightArr[0]){
    result.push(leftArr.shift());
  }
  else {
    result.push(rightArr.shift());
  }
}
return [...result,...leftArr.slice(), ...rightArr.slice()]
// return result.concat(leftArr.slice()).concat(rightArr.slice());
}


module.exports = {mergeSort, merge};
