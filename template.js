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

function getSum(a, b) {
  return a + b;
}

function solve() {
  console.log(getSum(1, 2));
}
