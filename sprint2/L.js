const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

let n = 0;
let k = 0;

ioInterface.on('line', line => {
  [n, k] = line.split(' ').map(Number);
});

ioInterface.on('close', solve);

function solve() {
  const modules = [];
  const d = Math.pow(10, k);

  const fib = n => {
    let prev = 0,
      next = 1;
    for (let i = 0; i < n; i++) {
      let temp = next;
      next = (prev + next) % d;
      prev = temp;
      modules[i] = next;
    }
    return prev;
  };

  fib(n);

  if (modules.length === 0) {
    print(1);
    return;
  }

  print(modules[modules.length - 1]);
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
