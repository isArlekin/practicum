const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

let nums;

ioInterface.on('line', line => {
  nums = line.split(' ').map(n => parseInt(n, 10));
});

ioInterface.on('close', solve);

function solve() {
  let allOdd = true;
  let allEven = true;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && allOdd) {
      allOdd = false;
    } else if (nums[i] % 2 !== 0 && allEven) {
      allEven = false;
    }
  }

  printResult(allOdd || allEven ? 'WIN' : 'FAIL');
}

function printResult(result) {
  process.stdout.write(`${result}\n`);
}
