function brokenSearch(arr, k) {
  if (arr.length === 0) {
    return -1;
  }

  let leftP = 0;
  let rightP = arr.length;

  while (rightP >= leftP) {
    const middle = Math.floor((leftP + rightP) / 2);
    let brokenArrStart = -1;
    let brokenArrEnd = -1;

    if (isArraySorted(leftP, middle)) {
      if (isInArray(leftP, middle)) {
        return binarySearch(leftP, middle);
      }
    } else {
      brokenArrStart = leftP;
      brokenArrEnd = middle;
    }

    if (isArraySorted(middle, rightP)) {
      if (isInArray(middle, rightP)) {
        return binarySearch(middle, rightP);
      } else {
        break;
      }
    } else {
      brokenArrStart = middle;
      brokenArrEnd = rightP;
    }

    // it means that value is either in brokenArr or doesn't exist
    leftP = brokenArrStart;
    rightP = brokenArrEnd;
  }

  return -1;

  function isArraySorted(start, end) {
    return arr[end - 1] >= arr[start];
  }

  function isInArray(start, end) {
    return k >= arr[start] && k <= arr[end - 1];
  }

  // function binarySearch(start, end) {
  //   if (end <= start) {
  //     return -1;
  //   }
  //
  //   const middle = findMiddle(start, end);
  //
  //   if (arr[middle] === k) {
  //     return middle;
  //   }
  //
  //   if (arr[middle] > k) {
  //     return binarySearch(start, middle);
  //   } else {
  //     return binarySearch(middle + 1, end);
  //   }
  // }

  function binarySearch(start, end) {
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

  // function findMiddle(start, end) {
  //   return Math.floor((start + end) / 2);
  // }
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

// test();

module.exports = brokenSearch;
