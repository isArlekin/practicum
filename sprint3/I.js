const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 1;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const universityIds = readArray();
  const k = readNumber();
  const result = findMaxKUniversityIds(universityIds, k);
  printArray(result);
}

function findMaxKUniversityIds(ids, k) {
  const limit = 10001; //  is it included?
  let mask = new Array(limit);

  for (let i = 0; i < mask.length; i++) {
    mask[i] = { value: 0, idx: -1 };
  }

  for (let i = 0; i < ids.length; i++) {
    const item = mask[ids[i]];
    if (item.idx === -1) {
      item.idx = ids[i];
    }
    item.value++;
  }

  mask = mask.filter(item => item.idx !== -1);

  const stableSort = (arr, compare) =>
    arr
      .map((item, index) => ({ item, index }))
      .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
      .map(({ item }) => item);

  const kSortedIds = stableSort(mask, (a, b) => b.value - a.value).slice(0, k);

  return kSortedIds.map(({ idx }) => idx);
}

function readArray() {
  return readLine().split(' ').map(Number);
}

function readNumber() {
  return Number(readLine());
}

function readLine() {
  return inputLines[currentLine++];
}

function printArray(arr) {
  print(arr.join(' '));
}

function print(text) {
  process.stdout.write(`${text}\n`);
}

// printArray(findMaxKUniversityIds([2, 3, 1, 2, 4, 4], 5));

module.exports = findMaxKUniversityIds;
