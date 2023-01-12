const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 1;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const target = readNumber();
  const nums = readNumberArray();
  const result = fourSum(nums, target);

  print(result.length);

  if (result.length) {
    printArr(result);
  }
}

function fourSum(nums, target) {
  const set = new Set();

  if (nums.length < 4) {
    return [];
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const b = nums[j];
      const sum = target - a - b;
      let leftP = j + 1;
      let rightP = nums.length - 1;

      while (leftP < rightP) {
        if (nums[leftP] + nums[rightP] === sum) {
          const result = [a, b, nums[leftP], nums[rightP]];
          set.add(result.sort((a, b) => a - b).join(' '));
          leftP++;
          rightP--;
        } else if (nums[leftP] + nums[rightP] > sum) {
          rightP--;
        } else {
          leftP++;
        }
      }
    }
  }

  return Array.from(set);
}

function readNumberArray() {
  return readLine().split(' ').map(Number);
}

function readNumber() {
  return Number(readLine());
}

function readLine() {
  return inputLines[currentLine++];
}

function printArr(arr) {
  print(arr.join('\n'));
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
