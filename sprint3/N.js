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
  const segmentArr = readArray(n);
  segmentArr.sort(compareTwoArr);
  mergeArrays(segmentArr);
}

// [ 1, 3 ], [ 2, 4 ], [ 3, 5 ], [ 4, 6 ], [ 5, 6 ], [ 7, 10 ]
//
// [ 1, 3 ], [ 1, 4 ], [ 1, 5 ], [ 1, 6 ], [ 1, 6 ], [ 7, 10 ]
//
function mergeArrays(arr) {
  const result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][1] >= arr[i + 1][0]) {
      arr[i + 1][0] = arr[i][0];
      arr[i + 1][1] = arr[i][1] > arr[i + 1][1] ? arr[i][1] : arr[i + 1][1];
    } else {
      result.push(arr[i]);
    }
  }

  result.push(arr[arr.length - 1]);

  printArray(result);
}

function compareTwoArr(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      continue;
    }
    return arr1[i] - arr2[i];
  }
}

function readArray(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(readLine().split(' ').map(Number));
  }
  return result;
}

function readNumber() {
  return Number(readLine());
}

function readLine() {
  return inputLines[currentLine++];
}

function printArray(arr) {
  print(arr.map(item => item.join(' ')).join('\n'));
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
