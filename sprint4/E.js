const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const str = readLine();
  print(findLongestSubStr(str));
}

function findLongestSubStr(str) {
  let map = new Map();
  let result = 0;
  let curStrLength = 0;

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    if (map.has(ch)) {
      const prevIndex = map.get(ch);
      result = Math.max(result, curStrLength);
      curStrLength = 0;
      map = new Map();
      i = prevIndex;
    } else {
      curStrLength++;
      map.set(ch, i);
    }
  }

  if (curStrLength) {
    result = Math.max(result, curStrLength);
  }

  return result;
}

function readLine() {
  return inputLines[currentLine++];
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
