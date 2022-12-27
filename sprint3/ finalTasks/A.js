function brokenSearch(arr, k) {
  if (arr.length === 0) {
    return -1;
  }
  if (arr.length === 1) {
    return arr[0] === k ? 0 : -1;
  } else {
    return divideToTwoArrays(0, arr.length);
  }

  function divideToTwoArrays(start, end) {
    const middle = findMiddle(start, end);

    const leftStart = start;
    const leftEnd = middle;
    const rightStart = middle;
    const rightEnd = end;

    if (isArraySorted(leftStart, leftEnd)) {
      if (belongsToArray(leftStart, leftEnd)) {
        return binarySearch(leftStart, leftEnd);
      } // we don't need this part at all
    } else {
      return divideToTwoArrays(leftStart, leftEnd);
    }

    if (isArraySorted(rightStart, rightEnd)) {
      if (belongsToArray(rightStart, rightEnd)) {
        return binarySearch(rightStart, rightEnd);
      } // we don't need this part at all
    } else {
      return divideToTwoArrays(rightStart, rightEnd);
    }

    return -1;

    function isArraySorted(start, end) {
      return arr[end - 1] >= arr[start];
    }

    function belongsToArray(start, end) {
      return k >= arr[start] && k <= arr[end - 1];
    }
  }

  function binarySearch(start, end) {
    if (end <= start) {
      return -1;
    }

    const middle = findMiddle(start, end);

    if (arr[middle] === k) {
      return middle;
    }

    if (arr[middle] > k) {
      return binarySearch(start, middle);
    } else {
      return binarySearch(middle + 1, end);
    }
  }

  function findMiddle(start, end) {
    return Math.floor((start + end) / 2);
  }
}

function test() {
  const arr = [4, 9, 1, 3];
  const index = brokenSearch(arr, 1);
  if (index > -1) {
    console.error(`Found at - ${index}`);
  } else {
    console.log('Not Found');
  }
}

test();

module.exports = brokenSearch;
