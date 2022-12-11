const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const totalCommands = readNumber();
  const dequeSize = readNumber();
  const commands = readCommands();
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

class BufferQueue {
  constructor(maxSize) {
    this.head = 0;
    this.tail = 0;
    this.maxSize = maxSize;
    this.queue = new Array(maxSize);
    this._size = 0;
  }

  push(item) {
    if (this._size !== this.maxSize) {
      this.queue[this.tail] = item;
      this.tail = (this.tail + 1) % this.maxSize;
      this._size++;
    } else {
      return 'error';
    }
  }

  peek() {
    if (this.isEmpty()) {
      return 'None';
    }
    return this.queue[this.head];
  }

  pop() {
    if (this.isEmpty()) {
      return 'None';
    }
    const item = this.queue[this.head];
    this.queue[this.head] = undefined;
    this.head = (this.head + 1) % this.maxSize;
    this._size--;
    return item;
  }

  isEmpty() {
    return this._size === 0;
  }

  size() {
    return this._size;
  }
}

module.exports = BufferQueue;
