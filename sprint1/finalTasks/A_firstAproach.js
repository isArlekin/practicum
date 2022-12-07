const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

// 0 1 2 3 4 5 6 7 8

// 1 0 2 3 0 4 5 0 6
// firstZero - 1
// 1 0 1 2 0 1 2 0 1
// firstZero - 7
// 1 0 1 1 0 1 1 0 1
function solve() {
  const n = readNumber();
  // const nums = readNumberArr();
  // const zeroIndexes = findAllZeros(nums);
  const [nums, zeroIndexes] = readArrAndCountZeros();
  const firstZeroIndex = zeroIndexes.keys().next().value;
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      result.push(0);
      if (i !== firstZeroIndex) {
        zeroIndexes.delete(firstZeroIndex);
      }
    } else {
      result.push(findNearest(zeroIndexes, i));
    }
  }

  print(result.join(' '));
}

function findNearest(zeroIndexes, index) {
  let min = Number.MAX_SAFE_INTEGER;

  for (const zeroIndex of zeroIndexes) {
    const temp = Math.abs(zeroIndex - index);
    if (temp < min) {
      min = temp;
    }
    if (min === 1) {
      break;
    }
  }

  return min;
}

function readArrAndCountZeros() {
  const indexes = new Set();
  const nums = readLine()
    .split(' ')
    .map((n, i) => {
      if (n === '0') {
        indexes.add(i);
      }
      return Number(n);
    });
  return [nums, indexes];
}

function findAllZeros(nums) {
  const indexes = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      indexes.add(i);
    }
  }
  return indexes;
}

function readNumberArr() {
  return readLine()
    .split(' ')
    .map(n => Number(n));
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
