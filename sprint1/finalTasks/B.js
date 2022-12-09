// Initial solution - https://contest.yandex.ru/contest/22450/run-report/78916211/
// Solution after review - https://contest.yandex.ru/contest/22450/run-report/78947689/
const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const NUMBER_OF_PAYERS = 2;
  const maxKeysToPresPerPlayer = readNumber();
  const gameBoard = readMatrix();
  const score = countGameScore(gameBoard, maxKeysToPresPerPlayer * NUMBER_OF_PAYERS);

  print(score);
}

function countGameScore(board, maxPressedKeys) {
  const keysByCount = getKesByCount(board);
  let score = 0;

  for (const keyCount of keysByCount.values()) {
    if (keyCount <= maxPressedKeys) {
      score++;
    }
  }

  return score;
}

function getKesByCount(board) {
  const countByKeys = new Map();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== '.') {
        countByKeys.set(board[i][j], (countByKeys.get(board[i][j]) || 0) + 1);
      }
    }
  }
  return countByKeys;
}

function readMatrix() {
  const matrix = [];
  for (let i = currentLine; i < inputLines.length; i++) {
    matrix.push(
      readLine()
        .split('')
        .map(celVal => {
          return celVal === '.' ? '.' : Number(celVal);
        }),
    );
  }
  return matrix;
}

function readNumber() {
  return Number(readLine());
}

function readLine() {
  return inputLines[currentLine++];
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
