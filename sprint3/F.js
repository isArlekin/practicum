const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 1;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const lengths = readArray();
  const result = findMaxPerimeter(lengths);
  print(result);
}

function findMaxPerimeter(lengths) {
  const sortedLengths = lengths.sort((a, b) => b - a);
  let maxPerimeter = Number.MIN_SAFE_INTEGER;

  for (let i = 0; sortedLengths.length - i >= 3; i++) {
    if (sortedLengths[i] < sortedLengths[i + 1] + sortedLengths[i + 2]) {
      const perimeter = sortedLengths[i] + sortedLengths[i + 1] + sortedLengths[i + 2];
      maxPerimeter = perimeter > maxPerimeter ? perimeter : maxPerimeter;
      i += 2;
    }
  }

  return maxPerimeter === Number.MIN_SAFE_INTEGER ? 0 : maxPerimeter;
}

function countingSort(arr, max) {
  if (arr.length === 0) {
    return arr;
  }

  const range = new Array(max).fill(0);
  for (const n of arr) {
    range[n] = range[n] === undefined ? 1 : range[n] + 1;
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
  return readLine().split(' ').map(Number);
}

function readLine() {
  return inputLines[currentLine++];
}

function print(text) {
  process.stdout.write(`${text}\n`);
}

module.exports = findMaxPerimeter;
