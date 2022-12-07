// https://contest.yandex.ru/contest/22450/run-report/78916265/
const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 1; // skip first line because `n` isn't used

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const plots = readNumberArr();

  let firstZeroIndex = findFirstZero(plots);
  let firstEndZeroIndex = findFirstEndZero(plots);
  const isMoreThanOneZero = firstZeroIndex !== firstEndZeroIndex;
  const result = [];

  for (let i = 0; i < plots.length; i++) {
    if (plots[i] === 0) {
      result.push(0);
      if (i !== firstZeroIndex) {
        firstZeroIndex = i;
      }
    } else {
      result.push(Math.abs(firstZeroIndex - i));
    }
  }

  if (isMoreThanOneZero) {
    for (let i = plots.length - 1; i > -1; i--) {
      if (plots[i] === 0 && i !== firstEndZeroIndex) {
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
  return readLine().split(' ').map(Number);
}

function readLine() {
  return inputLines[currentLine++];
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
