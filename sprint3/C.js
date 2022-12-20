const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const s = readLine();
  const t = readLine();

  let leftP = 0;
  let rightP = 0;
  while (leftP < s.length && rightP < t.length) {
    if (s[leftP] === t[rightP]) {
      leftP++;
    }
    rightP++;
  }

  print(leftP === s.length ? 'True' : 'False');
}

function readLine() {
  return inputLines[currentLine++];
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
