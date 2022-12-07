const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

let root;
let num;

ioInterface.on('line', line => {
  num = Number(line);
  root = Math.sqrt(num);
});

ioInterface.on('close', solve);

function solve() {
  if (num < 4) {
    printArr([num]);
    return;
  }

  const result = [];
  let curDivider = 2;
  let curNum = num;

  while (curDivider <= root && curNum > 1) {
    if (isPrime(curNum)) {
      result.push(curNum);
      break;
    }
    if (curNum % curDivider === 0) {
      result.push(curDivider);
      curNum = curNum / curDivider;
    } else {
      curDivider = curDivider === 2 ? 3 : curDivider + 2;
    }
  }

  printArr(result.sort((a, b) => a - b));
}

function isPrime(num) {
  let sqrtnum = Math.floor(Math.sqrt(num));
  let prime = num !== 1;
  for (let i = 2; i < sqrtnum + 1; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

function printArr(arr) {
  process.stdout.write(`${arr.join(' ')}\n`);
}
