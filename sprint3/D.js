const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const n = readNumber();
  const childrenGreedy = readArray();
  const m = readNumber();
  const cookieSizes = readArray();

  const result = countHappyChildren(childrenGreedy, cookieSizes);

  print(result);
}

function countHappyChildren(childrenGreedy, cookieSizes) {
  const limit = 1000;
  const greedByCount = countingSort(childrenGreedy, limit);
  const cookieSizesByCount = countingSort(cookieSizes, limit);
  let result = 0;
  let i = 0;
  let j = 0;

  while (i !== greedByCount.length && j !== cookieSizesByCount.length) {
    if (greedByCount[i] <= cookieSizesByCount[j]) {
      result++;
      i++;
      j++;
    } else {
      j++;
    }
  }

  return result;
}

function countingSort(arr, max) {
  if (arr.length === 0) {
    return arr;
  }

  const range = new Array(max).fill(0);
  for (const n of arr) {
    const currN = Number(n);
    range[currN] = range[currN] === undefined ? 1 : range[currN] + 1;
  }

  const sortedArr = [];
  for (let i = 0; i < range.length; i++) {
    let j = 0;
    while (j !== range[i]) {
      sortedArr.push(i);
      j++;
    }
  }

  return sortedArr;
}

function readArray() {
  return readLine().split(' ');
}

function readNumber() {
  return Number(readLine());
}

function readLine() {
  return inputLines[currentLine++];
}

function print(text) {
  process.stdout.write(`${text}\n`);
}

module.exports = countHappyChildren;
