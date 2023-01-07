const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const n = readLine();
  const set = new Set();

  for (let i = 1; i <= n; i++) {
    const workshop = inputLines[i];

    if (!set.has(workshop)) {
      set.add(workshop);
    }
  }

  print(Array.from(set.keys()).join('\n'));
}

function readLine() {
  return inputLines[currentLine++];
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
