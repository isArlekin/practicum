class Stack {
  static ERROR = 'error';

  constructor() {
    this.arr = [];
  }

  push(element) {
    this.arr.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return Stack.ERROR;
    }
    return this.arr.pop();
  }

  isEmpty() {
    return this.arr.length === 0;
  }
}

module.exports = Stack;
