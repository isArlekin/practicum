const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const [, budget] = readArray();
  const housePrices = readArray();
  const result = getCountOfAffordableHomes(housePrices, budget);
  print(result);
}

// [20, 30, 60] 100
function getCountOfAffordableHomes(housePrices, budget) {
  const limit = 100000;
  // const sortedPrices = housePrices.sort((a, b) => a - b);
  const sortedPrices = countingSort(housePrices, limit);
  let currentBudget = budget;
  let result = 0;

  for (let i = 0; i < sortedPrices.length; i++) {
    if (currentBudget - sortedPrices[i] >= 0) {
      result++;
      currentBudget = currentBudget - sortedPrices[i];
    } else {
      break;
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

module.exports = getCountOfAffordableHomes;
