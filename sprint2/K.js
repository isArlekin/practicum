const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

let n = 0;

ioInterface.on('line', line => {
  n = Number(line);
});

ioInterface.on('close', solve);

function solve() {
  const result = fib(n);
  print(result);
}

function fib(curN) {
  if (curN <= 1) {
    return 1;
  }
  return fib(curN - 1) + fib(curN - 2);
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
