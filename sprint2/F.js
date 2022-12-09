const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const commands = readCommands();
  const maxStack = new StackMax();

  for (let i = 0; i < commands.length; i++) {
    const [command, value] = commands[i];
    const result = maxStack[command](value);
    if (command === 'pop' && result === 'error') {
      console.log(result);
    } else if (command === 'get_max') {
      console.log(result);
    }
  }
}

function readCommands() {
  const commands = [];
  for (let i = 1; i < inputLines.length; i++) {
    const command = inputLines[i].split(' ');
    if (command.length === 2) {
      command[1] = Number(command[1]);
    }
    commands.push(command);
  }
  return commands;
}

class StackMax {
  constructor() {
    this.store = [];
    this.max = Number.MIN_SAFE_INTEGER;
  }

  push(n) {
    this.store.push(n);
    this.max = n > this.max ? n : this.max;
  }

  pop() {
    if (this.isEmpty()) {
      return 'error';
    }
    const n = this.store.pop();
    this.max = Math.max(...this.store);
    return n;
  }

  get_max() {
    if (this.isEmpty()) {
      return 'None';
    }
    return this.max;
  }

  isEmpty() {
    return this.store.length === 0;
  }
}
