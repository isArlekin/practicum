const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const totalDays = readNumber();
  const moneyToDays = readArray();
  const bicycleCost = readNumber();
  const result = `${findDays(moneyToDays, bicycleCost, 0, totalDays)} ${findDays(
    moneyToDays,
    bicycleCost * 2,
    0,
    totalDays,
  )}`;

  print(result);
}

function findDays(moneyToDays, cost, left, right) {
  if (right <= left) {
    return -1;
  }
  const mid = Math.floor((left + right) / 2);
  const moneyAtDay = moneyToDays[mid];

  if (moneyAtDay >= cost) {
    const searchDayLeft = findDays(moneyToDays, cost, left, mid);
    return searchDayLeft !== -1 ? searchDayLeft : mid + 1;
  } else {
    return findDays(moneyToDays, cost, mid + 1, right);
  }
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

function print(text) {
  process.stdout.write(`${text}\n`);
}

function printArray(array) {
  process.stdout.write(`${array.join(' ')}\n`);
}
