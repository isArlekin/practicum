const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 1;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

// colors 0 - розовый, 1 - желтый, 2 - красный
function solve() {
  const colors = [0, 0, 0];
  const clothColours = readArray();

  for (const clothColor of clothColours) {
    colors[Number(clothColor)]++;
  }

  const sortedClothByColors = [];
  for (let i = 0; i < colors.length; i++) {
    let j = 0;
    while (j !== colors[i]) {
      sortedClothByColors.push(i);
      j++;
    }
  }

  printArray(sortedClothByColors);
}

function printArray(array) {
  print(array.join(' '));
}

function readArray() {
  const line = readLine();
  return line.length === 0 ? [] : line.split(' ');
}

function readLine() {
  return inputLines[currentLine++];
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
