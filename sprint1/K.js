const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 1;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const x = readLine().replace(/ /gi, '');
  const k = readLine();
  const answer = x.length < k.length ? sumTowNums(k, x) : sumTowNums(x, k);
  print(answer);
}

function sumTowNums(a, b) {
  let carry = 0;
  let result = '';

  for (let i = a.length - 1, j = b.length - 1; i > -1; i--, j--) {
    const sum = (Number(a[i]) || 0) + (Number(b[j]) || 0) + carry;
    carry = sum > 9;
    result = ' ' + (sum % 10) + result;
  }

  if (carry) {
    result = 1 + result;
  } else {
    result = result.trim();
  }

  return result;
}

function readLine() {
  return inputLines[currentLine++];
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
