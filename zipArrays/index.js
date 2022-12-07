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
  const firstArr = readArr();
  const secondArr = readArr();
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(firstArr[i]);
    result.push(secondArr[i]);
  }

  console.log(result.join(' '));
}
