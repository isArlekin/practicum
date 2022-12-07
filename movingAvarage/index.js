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

  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  for (let i = 0; i < n - k + 1; i++) {
    if (i === 0) {
      result.push(sum / k);
    } else {
      const currentSum = sum - nums[i - 1] + nums[i + k - 1];
      sum = currentSum;
      result.push(currentSum / k);
    }
  }

  console.log(result.join(' '));
}
