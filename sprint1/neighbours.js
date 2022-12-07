const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

let currentLine = 0;

let rows;
let cols;
const matrix = [];
let targetRow;
let targetCol;

ioInterface.on('line', line => {
  if (rows === undefined) {
    rows = Number(line);
    return;
  }
  if (cols === undefined) {
    cols = Number(line);
    return;
  }

  if (currentLine < rows) {
    matrix.push(line.split(' ').map(n => Number(n)));
    currentLine++;
  } else {
    if (targetRow === undefined) {
      targetRow = Number(line);
      return;
    }
    if (targetCol === undefined) {
      targetCol = Number(line);
    }
  }
});

ioInterface.on('close', solve);

function solve() {
  const row = matrix[targetRow];
  const col = getCol(targetCol);
  const result = [row[targetCol + 1], col[targetRow + 1], row[targetCol - 1], col[targetRow - 1]]
    .filter(n => n !== undefined)
    .sort((a, b) => a - b);

  printResult(result.join(' '));

  function getCol(colIndex) {
    const col = [];
    for (let i = 0; i < rows; i++) {
      col.push(matrix[i][colIndex]);
    }
    return col;
  }
}

function printResult(result) {
  process.stdout.write(`${result}\n`);
}
