const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

// 12345678944
function solve() {
  const bigIntA = BigInt(`0b${inputLines[currentLine++]}`);
  const bigIntB = BigInt(`0b${inputLines[currentLine++]}`);

  process.stdout.write(getSum(bigIntA, bigIntB).toString(2) + '\n');
}

function getSum(a, b) {
  if (a === 0n || b === 0n) return a ^ b;

  while (b !== 0n) {
    let temp = a;
    a ^= b;
    b &= temp;
    if (b !== 0n) b <<= 1n;
  }

  return a;
}
