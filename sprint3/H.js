const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 1;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const nums = readArray();
  nums.sort(compare);
  printArray(nums);
}

function compare(a, b) {
  const longest = a.length > b.length ? a : b;
  for (let i = 0; i < longest.length; i++) {
    const left = a[i] || a[a.length - 1];
    const right = b[i] || b[b.length - 1];
    if (left === right) {
      continue;
    }
    if (left === '0') {
      return 1;
    }
    if (right === '0') {
      return -1;
    }
    if (left > right) {
      return -1;
    } else {
      return 1;
    }
  }
}

function readArray() {
  return readLine().split(' ');
}

function readLine() {
  return inputLines[currentLine++];
}

function printArray(arr) {
  print(arr.join(''));
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
