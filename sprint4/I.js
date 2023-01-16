const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const n = readLine();
  const teamAScores = readNumberArray();
  const m = readLine();
  const teamBScores = readNumberArray();

  print(findLongestCommonSubArray(teamAScores, teamBScores));
}

function findLongestCommonSubArray(nums1, nums2) {
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
    const numsAHashes = getRollingHashes(numsA, powersA, windowLength);
    const numsBHashes = getRollingHashes(numsB, powersB, windowLength);

    let startOfHash = 0;
    for (const subArrHash of numsAHashes) {
      if (hashMap.has(subArrHash)) {
        const arrayOfIndexes = hashMap.get(subArrHash);
        arrayOfIndexes.push(startOfHash++);
        hashMap.set(subArrHash, arrayOfIndexes);
      } else {
        hashMap.set(subArrHash, [startOfHash++]);
      }
    }

    startOfHash = 0;
    for (const subArrHash of numsBHashes) {
      const hashIndexes = hashMap.get(subArrHash) || [];

      for (let i = 0; i < hashIndexes.length; i++) {
        if (isSubArraysEqual(numsA, hashIndexes[i], numsB, startOfHash, windowLength)) {
          return true;
        }
      }
      startOfHash++;
    }

    return false;
  }

  function getRollingHashes(nums, powers, windowSize) {
    const hashes = [];
    let windowHash = 0;

    let i = 0;
    while (i < windowSize) {
      windowHash = (windowHash * a + nums[i]) % m;
      i++;
    }
    hashes.push(windowHash);

    for (let i = windowSize; i < nums.length; i++) {
      const previousTerm = nums[i - windowSize] * powers[windowSize - 1];
      windowHash = mod((windowHash - previousTerm) * a + nums[i], m);
      hashes.push(windowHash);
    }

    return hashes;
  }

  return leftP - 1;
}

function isSubArraysEqual(numsA, startIndexOfSubArrA, numsB, startIndexOfSubArrB, windowLength) {
  for (let i = 0; i < windowLength; i++) {
    if (numsA[startIndexOfSubArrA + i] !== numsB[startIndexOfSubArrB + i]) {
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

function readNumberArray() {
  return readLine().split(' ').map(Number);
}

function readLine() {
  return inputLines[currentLine++];
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
