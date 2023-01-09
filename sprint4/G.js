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
  const prefixSum = buildPrefixSum(nums);
  const map = new Map();

  for (let i = 0; i < prefixSum.length; i++) {
    if (!map.has(prefixSum[i])) {
      map.set(prefixSum[i], i);
    }
  }

  let max = Number.MIN_SAFE_INTEGER;

  for (let i = prefixSum.length - 1; i >= 0; i--) {
    const earliestIndex = map.get(prefixSum[i]);
    if (earliestIndex !== i) {
      const delta = i - earliestIndex;
      max = delta > max ? delta : max;
    }
  }

  const result = max === Number.MIN_SAFE_INTEGER ? 0 : max;

  print(result);
}

function buildPrefixSum(nums) {
  const prefixSum = [];
  prefixSum[0] = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + hash(nums[i]);
  }

  return prefixSum;
}

function hash(playerId) {
  return playerId === 0 ? -1 : 1;
}

function readArray() {
  return readLine().split(' ').map(Number);
}

function readLine() {
  return inputLines[currentLine++];
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
