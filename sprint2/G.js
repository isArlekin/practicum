const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const commands = readCommands();
  const maxStack = new StackMaxEffective();

  for (let i = 0; i < commands.length; i++) {
    const [command, value] = commands[i];
    const result = maxStack[command](value);

    if ((command === 'pop' && result === 'error') || command === 'get_max') {
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

class StackMaxEffective {
  constructor() {
    this.stack = [];
    this.maxStack = [];
  }

  push(n) {
    this.stack.push(n);

    if (this.stack.length === 1) {
      this.maxStack.push(n);
      return;
    }

    if (n > this.maxStack[this.maxStack.length - 1]) {
      this.maxStack.push(n);
    } else {
      this.maxStack.push(this.maxStack[this.maxStack.length - 1]);
    }
  }

  pop() {
    if (this.isEmpty()) {
      return 'error';
    }
    this.maxStack.pop();
    return this.stack.pop();
  }

  get_max() {
    if (this.isEmpty()) {
      return 'None';
    }
    return this.maxStack[this.maxStack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}
