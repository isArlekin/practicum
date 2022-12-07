const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

let a = 0;
let x = 0;
let b = 0;
let c = 0;

ioInterface.on('line', line => {
  [a, x, b, c] = line.split(' ').map(n => parseInt(n, 10));
});

ioInterface.on('close', () => {
  process.stdout.write(`${solve()}\n`);
});

function solve() {
  return a * x * x + b * x + c;
}
