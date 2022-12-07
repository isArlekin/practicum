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

function getSum(a, b) {
  return a + b;
}

function solve() {
  var a = Number(readLine());
  var b = Number(readLine());
  console.log(getSum(a, b));
}
