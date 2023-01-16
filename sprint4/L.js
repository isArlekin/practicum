const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const [n, k] = readNumberArray();
  const str = readLine();
  const result = findSubStrIndexes(str, n, k);

  print(result.join(' '));
}

function findSubStrIndexes(str, windowLength, k) {
  const hashes = getRollingHashes(str, windowLength);

  // filter hashes
  for (const [key, indexes] of hashes) {
    if (indexes.length < k) {
      hashes.delete(key);
    }
  }

  /*
   * {
   *   124 => [0, 3, 5],
   *   12 => [24, 30]
   * }*/
  const subStrMap = new Map();
  for (const indexes of hashes.values()) {
    for (const startIndex of indexes) {
      const subStr = str.slice(startIndex, startIndex + windowLength);

      if (subStrMap.has(subStr)) {
        const currentStartIndexes = subStrMap.get(subStr);
        currentStartIndexes.push(startIndex);
        subStrMap.set(subStr, currentStartIndexes);
      } else {
        subStrMap.set(subStr, [startIndex]);
      }
    }
  }

  const result = [];

  for (const indexes of subStrMap.values()) {
    if (indexes.length >= k) {
      result.push(indexes[0]);
    }
  }

  return result;
}

function getRollingHashes(str, windowSize) {
  const a = 239;
  const m = 10e9 + 7;
  const power = getPower(a, windowSize, m);
  const hashes = new Map();
  let windowHash = 0;

  for (let i = 0; i < windowSize; i++) {
    const code = str.charCodeAt(i);
    windowHash = (windowHash * a + code) % m;
  }

  hashes.set(windowHash, [0]);

  for (let i = windowSize; i < str.length; i++) {
    const previousCode = str.charCodeAt(i - windowSize);
    const previousTerm = previousCode * power;
    const code = str.charCodeAt(i);

    windowHash = mod((windowHash - previousTerm) * a + code, m);

    if (hashes.has(windowHash)) {
      const indexes = hashes.get(windowHash);
      indexes.push(i - windowSize + 1);
      hashes.set(windowHash, indexes);
    } else {
      hashes.set(windowHash, [i - windowSize + 1]);
    }
  }

  return hashes;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function getPower(a, n, m) {
  const pows = [1];

  for (let i = 1; i < n; i++) {
    pows.push((pows[i - 1] * a) % m);
  }

  return pows[pows.length - 1];
}

function readNumberArray() {
  return readLine().split(' ').map(Number);
}

function readLine() {
  return inputLines[currentLine++];
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
