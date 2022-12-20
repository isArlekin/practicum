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
  buildAllBracketsSeq(n, 0, 0, '');
}

function buildAllBracketsSeq(n, openCount, closeCount, answ) {
  if (openCount + closeCount === 2 * n) {
    print(answ);
    return;
  }
  if (openCount < n) {
    buildAllBracketsSeq(n, openCount + 1, closeCount, answ + '(');
  }
  if (openCount > closeCount) {
    buildAllBracketsSeq(n, openCount, closeCount + 1, answ + ')');
  }
}

function readNumber() {
  return Number(readLine());
}

function readLine() {
  return inputLines[currentLine++];
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
