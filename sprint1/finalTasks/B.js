const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const k = readNumber() * 2; // they're playing together
  const field = readField();
  let score = 0;

  for (const value of field.values()) {
    if (value <= k) {
      score++;
    }
  }

  print(score);
}

function readField() {
  const field = new Map();
  for (let i = currentLine; i < inputLines.length; i++) {
    readLine()
      .split('')
      .forEach(celVal => {
        if (celVal !== '.') {
          const value = Number(celVal);
          field.set(value, (field.get(value) || 0) + 1);
        }
      });
  }
  return field;
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
