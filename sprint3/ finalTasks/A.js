function brokenSearch(arr, k) {
  if (arr.length === 0) {
    return -1;
  }

  if (arr.length === 1) {
    return arr[0] === k ? 0 : -1;
  }

  const [subArrStart, subArrEnd] = findSubArray(arr, k, 0, arr.length);

  return binarySearch(arr, k, subArrStart, subArrEnd);
}

function findSubArray(array, k, start, end) {
  const middle = findMiddle(start, end);

  if (isArraySorted(array, start, middle)) {
    if (isInArray(array, k, start, middle)) {
      return [start, middle];
    }
  } else {
    const borders = findSubArray(array, k, start, middle);
    if (borders[0] !== -1 && borders[1] !== -1) {
      return borders;
    }
  }

  if (isArraySorted(array, middle, end)) {
    if (isInArray(array, k, middle, end)) {
      return [middle, end];
    }
  } else {
    return findSubArray(array, k, middle, end);
  }

  return [-1, -1];
}

function isArraySorted(array, start, end) {
  return array[end - 1] >= array[start];
}

function isInArray(array, k, start, end) {
  return k >= array[start] && k <= array[end - 1];
}

function binarySearch(arr, k, start, end) {
  let l = start;
  let r = end - 1;
  let mid;

  while (r >= l) {
    mid = l + Math.floor((r - l) / 2);

    if (arr[mid] === k) {
      return mid;
    }

    if (arr[mid] > k) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1;
}

function findMiddle(start, end) {
  return Math.floor((start + end) / 2);
}

// function test() {
//   const arr = [9, 1, 3, 8];
//   const index = brokenSearch(arr, 8);
//
//   if (index > -1) {
//     console.error(`Found at - ${index}`);
//   } else {
//     console.log('Not Found');
//   }
// }

module.exports = brokenSearch;
