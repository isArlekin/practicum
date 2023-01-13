const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 1;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const strs = readArray();
  const result = findAnagrams(strs);

  print(result.map(indexes => indexes.join(' ')).join('\n'));
}

function findAnagrams(strs) {
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split('').sort().join('');

    if (map.has(sortedStr)) {
      const indexes = map.get(sortedStr);
      indexes.push(i);
      map.set(sortedStr, indexes);
    } else {
      map.set(sortedStr, [i]);
    }
  }

  return Array.from(map.values());
}

function readArray() {
  return readLine().split(' ');
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
