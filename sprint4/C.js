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
  const n = readNumber();
  const hashes = getPrecomputedHash(str, a, m);
  const pows = getPowArr(a, str.length, m);

  for (let i = currentLine + 1; i <= inputLines.length; i++) {
    const [left, right] = readNumberArray();
    const maxRPow = right - 1;
    const maxLPow = left - 1 - 1;
    const delta = maxRPow - maxLPow;
    print(getSubstringHash(hashes, pows, left - 1, right - 1, delta, m));
  }
}

function readNumberArray() {
  return readLine().split(' ').map(Number);
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

function getSubstringHash(hashes, pows, l, r, deltaPow, m) {
  let substrHash = hashes[r];

  if (l > 0) {
    substrHash = mod(substrHash - hashes[l - 1] * pows[deltaPow], m);
  }

  return substrHash;
}

function getPrecomputedHash(str, a, m) {
  const n = str.length;
  const hashes = [str.charCodeAt(0) % m];

  for (let i = 1; i < n; i++) {
    const code = str.charCodeAt(i);
    const prevHash = (hashes[i - 1] * a) % m;

    hashes.push((prevHash + code) % m);
  }

  return hashes;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function getPowArr(a, n, m) {
  const pows = [1];

  for (let i = 1; i < n; i++) {
    pows.push((pows[i - 1] * a) % m);
  }

  return pows;
}
