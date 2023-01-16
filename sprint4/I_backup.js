/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  // const a = 7;
  const a = 31;
  const m = 10e9 + 7;
  const minLength = Math.min(nums1.length, nums2.length);
  const powersA = getPowArr(a, nums1.length, m);
  const powersB = getPowArr(a, nums2.length, m);
  let leftP = 0;
  let rightP = minLength + 1;

  while (leftP < rightP) {
    const middle = Math.floor((leftP + rightP) / 2);

    if (checkSubArray(nums1, nums2, middle)) {
      leftP = middle + 1;
    } else {
      rightP = middle;
    }
  }

  function checkSubArray(numsA, numsB, windowLength) {
    const hashMap = new Map();
    const numsAHashes = gerRollingHashes(numsA, powersA, windowLength);
    const numsBHashes = gerRollingHashes(numsB, powersB, windowLength);

    for (let i = 0; i < numsAHashes.length; i++) {
      const [subArrHash, indexes] = numsAHashes[i];

      if (hashMap.has(subArrHash)) {
        const arrayOfIndexes = hashMap.get(subArrHash);
        arrayOfIndexes.push(indexes);
        hashMap.set(subArrHash, arrayOfIndexes);
      } else {
        hashMap.set(subArrHash, [indexes]);
      }
    }

    for (let i = 0; i < numsBHashes.length; i++) {
      const indexes = hashMap.get(numsBHashes[i][0]) || [];

      for (let j = 0; j < indexes.length; j++) {
        if (isSubArraysEqual(numsA, indexes[j], numsB, numsBHashes[i][1])) {
          return true;
        }
      }
    }

    return false;
  }

  function gerRollingHashes(nums, powers, length) {
    const hashes = [];
    let windowHash = 0;

    let i = 0;
    while (i < length) {
      const code = nums[i];
      windowHash = (windowHash + ((code * powers[length - i - 1]) % m)) % m;
      i++;
    }

    hashes.push([windowHash, [0, i]]);

    for (let i = length; i < nums.length; i++) {
      const code = nums[i];
      windowHash = mod(windowHash - nums[i - length] * powers[length - 1], m) * a + code;
      hashes.push([windowHash, [i - length + 1, i + 1]]);
    }

    return hashes;
  }

  return leftP - 1;
};

function isSubArraysEqual(numsA, indexesA, numsB, indexesB) {
  const length = indexesA[1] - indexesA[0];
  const [startIndexA] = indexesA;
  const [startIndexB] = indexesB;

  for (let i = 0; i < length; i++) {
    if (numsA[startIndexA + i] !== numsB[startIndexB + i]) {
      return false;
    }
  }

  return true;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function getPowArr(a, n, m) {
  const pows = [1];

  for (let i = 1; i < n; i++) {
    pows.push((pows[i - 1] * a) % m);
  }

  return pows;
}
