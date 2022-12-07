const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

let nums;
let n;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  n = readNumber();
  nums = readArr();

  if (n === 1) {
    print(1);
    return;
  }

  let count = 0;

  for (let i = 0; i < n; i++) {
    const greaterThenPrev = nums[i - 1] !== undefined ? nums[i] > nums[i - 1] : true;
    const greaterThenNext = nums[i + 1] !== undefined ? nums[i] > nums[i + 1] : true;
    if (greaterThenPrev && greaterThenNext) {
      count++;
    }
  }

  print(count);
}

function readArr() {
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

function print(num) {
  process.stdout.write(`${num}\n`);
}
