function countingSort(arr, max) {
  if (arr.length === 0) {
    return arr;
  }

  const range = new Array(max).fill(0);
  for (const n of arr) {
    range[n] = range[n] === undefined ? 1 : range[n] + 1;
  }

  const sortedArr = [];
  for (let i = 0; i < range.length; i++) {
    let j = 0;
    while (j !== range[i]) {
      sortedArr.push(i);
      j++;
    }
  }

  return sortedArr;
}

module.exports = countingSort;
