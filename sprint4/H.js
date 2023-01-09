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
  const result = compareStrings(s, t);

  print(result ? 'YES' : 'NO');
}

function compareStrings(s, t) {
  const uniqCharsInS = getUniqCharsMap(s);
  const tToSRepresentation = new Map();
  const newT = [];
  const it = uniqCharsInS.keys();

  for (const charInT of t) {
    let charInS = tToSRepresentation.get(charInT);

    if (!charInS) {
      charInS = it.next().value;
      if (!charInS) {
        return false;
      }
      tToSRepresentation.set(charInT, charInS);
    }

    if (uniqCharsInS.get(charInS) > 0) {
      newT.push(charInS);
      uniqCharsInS.set(charInS, uniqCharsInS.get(charInS) - 1);
    } else {
      return false;
    }
  }

  return s === newT.join('');
}

// print(compareStrings('abacaba', 'xhxixhx'));

function getUniqCharsMap(s) {
  const map = new Map();
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  return map;
}

function readLine() {
  return inputLines[currentLine++];
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
