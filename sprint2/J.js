const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 1;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const commands = readCommands();
  const queue = new LinkedListQueue();

  for (let i = 0; i < commands.length; i++) {
    const [command, value] = commands[i];
    const result = queue[command](value);

    if (result !== undefined) {
      console.log(result);
    }
  }
}

function readCommands() {
  const commands = [];
  for (let i = currentLine; i < inputLines.length; i++) {
    const command = inputLines[i].split(' ');
    if (command.length === 2) {
      command[1] = Number(command[1]);
    }
    commands.push(command);
  }
  return commands;
}

class LinkedListQueue {
  constructor() {
    this.list = new Node();
    this.head = this.list;
    this.tail = this.list;
    this._size = 0;
  }

  get() {
    if (this.isEmpty()) {
      return 'error';
    }
    const node = this.head.next;

    this.head.next = node.next;
    if (this._size === 1) {
      this.tail = this.head;
    }

    this._size--;

    return node.val;
  }

  put(item) {
    const node = new Node(item);

    if (this._size === 0) {
      this.head.next = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this._size++;
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }
}

class Node {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}
