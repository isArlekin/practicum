const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

let n;
let str;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  n = readNumber();
  str = readLine().trim();
  let curWord = '';
  let longestWord = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      defineLongestWord();
      curWord = '';
    } else {
      curWord += str[i];
    }
  }

  defineLongestWord();

  print(longestWord);
  print(longestWord.length);

  function defineLongestWord() {
    longestWord = curWord.length > longestWord.length ? curWord : longestWord;
  }
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
