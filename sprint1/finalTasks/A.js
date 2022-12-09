// Initial solution - https://contest.yandex.ru/contest/22450/run-report/78916265/
// Solution after review - https://contest.yandex.ru/contest/22450/run-report/78944086/
const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 1; // skip first line because `n` isn't used

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const plots = readNumberArr();

  if (plots[0] !== 0) {
    plots[0] = plots.length;
  }

  for (let i = 1; i < plots.length; i++) {
    if (plots[i] !== 0) {
      plots[i] = plots[i - 1] + 1;
    }
  }

  for (let i = plots.length - 2; i >= 0; i--) {
    if (plots[i] !== 0) {
      if (plots[i] > plots[i + 1]) {
        plots[i] = plots[i + 1] + 1;
      }
    }
  }

  print(plots.join(' '));
}

function readNumberArr() {
  return readLine().split(' ').map(Number);
}

function readLine() {
  return inputLines[currentLine++];
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
