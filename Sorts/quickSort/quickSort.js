function inPlaceQuickSort(arr, compare = (a, b) => a - b) {
  recursiveInPlaceQuickSort(0, arr.length - 1);

  function recursiveInPlaceQuickSort(start, end) {
    if (start >= end) {
      return;
    }
    const pivotIndex = Math.floor((start + end) / 2);
    const pivot = arr[pivotIndex];
    let leftP = start;
    let rightP = end;

    while (leftP < rightP) {
      while (compare(arr[leftP], pivot) < 0) {
        leftP++;
      }

      while (compare(arr[rightP], pivot) > 0) {
        rightP--;
      }

      if (leftP >= rightP) {
        break;
      }

      swap(arr, leftP, rightP);
    }

    recursiveInPlaceQuickSort(start, rightP);
    recursiveInPlaceQuickSort(rightP + 1, end);
  }
}

function test() {
  const arr = [9, 1, 2, 1, 7, 3, 5, 4];

  inPlaceQuickSort(arr);

  console.log(arr);
}
test();

function quickSort(arr, compare = (a, b) => a <= b) {
  if (arr.length < 2) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i !== pivotIndex) {
      if (compare(arr[i], pivot)) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }

  return [...quickSort(left, compare), pivot, ...quickSort(right, compare)];
}

function swap(arr, leftP, rightP) {
  const temp = arr[rightP];
  arr[rightP] = arr[leftP];
  arr[leftP] = temp;
}

module.exports = {
  quickSort,
  inPlaceQuickSort,
};
