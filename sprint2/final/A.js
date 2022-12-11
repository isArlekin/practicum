const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

ioInterface.on('line', line => {
  [n, k] = line.split(' ').map(Number);
});

ioInterface.on('close', solve);

function solve() {
  const numberOfCommands = readNumber();
}

function readCommands() {
  const commands = [];
  for (let i = 2; i < inputLines.length; i++) {
    const command = inputLines[i].split(' ');
    if (command.length === 2) {
      command[1] = Number(command[1]);
    }
    commands.push(command);
  }
  return commands;
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
