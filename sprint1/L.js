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
  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
  }

  for (const [key, value] of tMap) {
    if (!sMap.has(key)) {
      print(key);
      return;
    } else if (value > sMap.get(key)) {
      print(key);
      return;
    }
  }
}

function readLine() {
  return inputLines[currentLine++];
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
