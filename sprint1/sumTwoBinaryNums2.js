const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const a = inputLines[currentLine++];
  const b = inputLines[currentLine++];
  const answ = a.length > b.length ? sumTwoBinary(a, b) : sumTwoBinary(b, a);

  console.log(answ + '\n');
  // process.stdout.write(answ + '\n');
}
// 123
function sumTwoBinary(a, b) {
  let result = [];
  let carry = 0;
  let j = b.length - 1;

  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] === '1') {
      carry++;
    }
    if (j > -1 && b[j--] === '1') {
      carry++;
    }

    if (carry % 2 === 1) {
      result.push('1');
    } else {
      result.push('0');
    }

    carry = carry >> 1;
  }
  // 1234
  if (carry) {
    result.push('1');
  }

  return result.reverse().join('');
}
