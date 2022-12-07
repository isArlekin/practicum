const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

let num;

ioInterface.on('line', line => {
  num = Number(line);
});

ioInterface.on('close', solve);

function solve() {
  const result = [];

  while (num !== 0 && num !== 1) {
    result.push(num % 2);
    num = num >> 1;
  }
  result.push(num);

  print(result.reverse().join(''));
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
