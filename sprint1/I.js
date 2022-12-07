const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

let num;

ioInterface.on('line', line => {
  num = Number(line);
});

ioInterface.on('close', solve);

function solve() {
  let n = 0;
  let curNum = 1;

  while (curNum <= num) {
    if (curNum === num) {
      print('True');
      return;
    }
    curNum = Math.pow(4, n++);
  }

  print('False');
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
