const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const a = readNumber();
  const m = readNumber();
  const str = readLine();

  print(hash2(str, a, m));
}

function hash2(str, a, m) {
  const n = str.length;
  let result = 0;
  let pow = 1;

  for (let i = n - 1; i >= 0; i--) {
    const code = str.charCodeAt(i);
    result += (code * pow) % m;
    pow = (pow * a) % m;
  }

  return result % m;
}

function hash(str, a, m) {
  if (str.length === 0) {
    return 0;
  }

  if (str.length === 1) {
    return str.charCodeAt(0) % m;
  }
  let result = 0 % m;
  let n = str.length;

  for (let i = 0; i < n - 1; i++) {
    result = ((result + str.charCodeAt(i)) * a) % m;
  }

  const lastChar = str.charCodeAt(str.length - 1) % m;

  return result + lastChar;
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
