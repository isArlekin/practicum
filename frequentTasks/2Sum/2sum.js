function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return null;
}

// O(n) one pass O(n)
function twoSum() {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const targetMinusCurr = target - nums[i];
    if (map.has(targetMinusCurr)) {
      return [map.get(targetMinusCurr), i];
    } else {
      map.set(nums[i], i);
    }
  }

  return null;
}

// O(n)
function twoSumArrIsSorted(nums, target) {
  let leftP = 0;
  let rightP = nums.length - 1;

  while (leftP < rightP) {
    const sum = nums[leftP] + nums[rightP];

    if (sum === target) {
      return [leftP + 1, rightP + 1];
    }

    if (sum > target) {
      rightP--;
    } else {
      leftP++;
    }
  }
}
