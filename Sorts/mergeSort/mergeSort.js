function merge_sort(arr, left, right, compare = (a, b) => a < b) {
  if (right - left <= 1) {
    return;
  }

  const mid = Math.ceil((right + left) / 2);
  merge_sort(arr, left, mid);
  merge_sort(arr, mid, right);

  const result = merge(arr, left, mid, right, compare);

  let i = left;
  for (const item of result) {
    arr[i++] = item;
  }
}

function merge(arr, left, mid, right, compare = (a, b) => a < b) {
  let l = left;
  let r = mid;
  let k = 0;
  const result = new Array(right - left);
  while (l < mid && r < right) {
    if (compare(arr[l], arr[r])) {
      result[k] = arr[l];
      l++;
    } else {
      result[k] = arr[r];
      r++;
    }
    k++;
  }

  while (l < mid) {
    result[k] = arr[l];
    l++;
    k++;
  }

  while (r < right) {
    result[k] = arr[r];
    r++;
    k++;
  }

  return result;
}

module.exports = { merge_sort, merge };
