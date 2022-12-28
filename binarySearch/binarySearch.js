// [start, end)
function recursiveBinarySearch(arr, k, start, end) {
  if (start >= end) {
    return -1;
  }

  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === k) {
    return middle;
  }

  if (arr[middle] > k) {
    return recursiveBinarySearch(arr, k, start, middle);
  } else {
    return recursiveBinarySearch(arr, k, middle + 1, end);
  }
}

// [start, end)
function binarySearch(arr, k, start, end) {
  let left = start;
  let right = end;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === k) {
      return middle;
    }

    if (arr[middle] > k) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

module.exports = {
  recursiveBinarySearch,
  binarySearch,
};
