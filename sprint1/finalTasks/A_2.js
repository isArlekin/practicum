const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 1; // skip first line because `n` isn't used

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const nums = readNumberArr();
  let firstZeroIndex = findFirstZero(nums);
  let firstEndZeroIndex = findFirstEndZero(nums);
  const isMoreThanOneZero = firstZeroIndex !== firstEndZeroIndex;
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      result.push(0);
      if (i !== firstZeroIndex) {
        firstZeroIndex = i;
      }
    } else {
      result.push(Math.abs(firstZeroIndex - i));
    }
  }

  if (isMoreThanOneZero) {
    for (let i = nums.length - 1; i > -1; i--) {
      if (nums[i] === 0 && i !== firstEndZeroIndex) {
        firstEndZeroIndex = i;
      } else {
        const distance = Math.abs(firstEndZeroIndex - i);
        if (result[i] > distance) {
          result[i] = distance;
        }
      }
    }
  }

  print(result.join(' '));
}

function findFirstZero(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return i;
    }
  }
}

function findFirstEndZero(nums) {
  for (let i = nums.length - 1; i > -1; i--) {
    if (nums[i] === 0) {
      return i;
    }
  }
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
