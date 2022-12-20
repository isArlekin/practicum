const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 1;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const nums = readNumArray();

  if (isSorted(nums)) {
    printArray(nums);
  }

  sort(nums);
}

function isSorted(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return false;
    }
  }
  return true;
}

function sort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let isSorted = true;
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
        isSorted = false;
      }
    }
    if (isSorted) {
      break;
    }
    printArray(nums);
  }
}

function readNumArray() {
  return readLine().split(' ').map(Number);
}

function readLine() {
  return inputLines[currentLine++];
}

function printArray(arr) {
  print(arr.join(' '));
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
