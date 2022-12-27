const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 2;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

// 1
function solve() {
  const leftNums = readArray();
  const rightNums = readArray();

  print(findMedianInTwoArrays(leftNums, rightNums));
}

function findMedianInTwoArrays(left, right) {
  let m = left.length;
  let n = right.length;

  if (m > n) {
    return findMedianInTwoArrays(right, left);
  }

  let l = 0;
  let r = m;

  while (l <= r) {
    let p1 = Math.floor((l + r) / 2);
    let p2 = Math.floor((m + n + 1) / 2) - p1;

    let maxL1 = p1 === 0 ? Number.MIN_SAFE_INTEGER : left[p1 - 1];
    let minR1 = p1 === m ? Number.MAX_SAFE_INTEGER : left[p1];
    let maxL2 = p2 === 0 ? Number.MIN_SAFE_INTEGER : right[p2 - 1];
    let minR2 = p2 === n ? Number.MAX_SAFE_INTEGER : right[p2];

    if (maxL1 <= minR2 && maxL2 <= minR1) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxL1, maxL2) + Math.min(minR1, minR2)) / 2;
      } else {
        return Math.max(maxL1, maxL2);
      }
    } else if (maxL1 > minR2) {
      r = p1 - 1;
    } else {
      l = p1 + 1;
    }
  }
}

function readArray() {
  return readLine().split(' ').map(Number);
}

function readLine() {
  return inputLines[currentLine++];
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
