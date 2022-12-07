const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

let str;

ioInterface.on('line', line => {
  str = line;
});

ioInterface.on('close', solve);

function solve() {
  str = str.replace(/[^a-z]/gi, '').toLowerCase();
  let i = 0;
  let j = str.length - 1;

  while (i <= j) {
    if (str[i] !== str[j]) {
      print('False');
      return;
    }
    i++;
    j--;
  }

  print('True');
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
