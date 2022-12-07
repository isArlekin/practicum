const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
});

const inputLines = [];
let currentLine = 0;

reader.on('line', line => {
  inputLines.push(line);
});

process.stdin.on('end', solve);

function readLine() {
  return inputLines[currentLine++];
}

function readArr() {
  return readLine()
    .trim()
    .split(' ')
    .map(n => Number(n));
}

function solve() {
  const n = Number(readLine());
  const nums = readArr();
  const k = Number(readLine());
  const result = [];
  const hash = {};

  for (let i = 0; i < n; i++) {
    const y = k - nums[i];
    if (hash[y] !== undefined) {
      result.push(hash[y], nums[i]);
      break;
    } else {
      hash[nums[i]] = nums[i];
    }
  }

  if (result.length === 0) {
    console.log('None');
  } else {
    console.log(result.join(' '));
  }
}
