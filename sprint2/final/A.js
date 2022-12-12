const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 1; // skip first line since `n` isn't used

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const dequeSize = readNumber();
  const commands = readCommands();
  const deque = new Deque(dequeSize);
  const result = [];

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    const commandResult = deque[command[0]](command[1]);

    if (commandResult !== undefined) {
      result.push(commandResult);
    }
  }

  printArr(result);
}

function readCommands() {
  const commands = [];
  for (let i = 2; i < inputLines.length; i++) {
    commands.push(inputLines[i].split(' '));
  }
  return commands;
}

function readNumber() {
  return Number(readLine());
}

function readLine() {
  return inputLines[currentLine++];
}

function printArr(arr) {
  process.stdout.write(arr.join('\n'));
}

class Deque {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.size = 0;
    this.head = 0;
    this.tail = 0;
    this.array = new Array(maxSize);
  }

  push_front(element) {
    if (this.is_full()) {
      return 'error';
    }

    this.head = (this.head - 1 + this.maxSize) % this.maxSize;
    this.array[this.head] = element;

    this.size++;
  }

  push_back(element) {
    if (this.is_full()) {
      return 'error';
    }

    this.array[this.tail] = element;
    this.tail = (this.tail + 1) % this.maxSize;
    this.size++;
  }

  pop_front() {
    if (this.is_empty()) {
      return 'error';
    }
    const element = this.array[this.head];
    this.array[this.head] = undefined;
    this.head = (this.head + 1) % this.maxSize;

    this.size--;
    return element;
  }

  pop_back() {
    if (this.is_empty()) {
      return 'error';
    }
    this.tail = (this.tail - 1 + this.maxSize) % this.maxSize;
    const element = this.array[this.tail];
    this.array[this.tail] = undefined;
    this.size--;
    return element;
  }

  is_full() {
    return this.size === this.maxSize;
  }

  is_empty() {
    return this.size === 0;
  }
}

module.exports = Deque;
