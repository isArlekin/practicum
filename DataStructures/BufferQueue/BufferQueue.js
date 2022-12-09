class BufferQueue {
  constructor(maxSize) {
    this.head = 0;
    this.tail = 0;
    this.maxSize = maxSize;
    this.queue = new Array(maxSize);
    this.size = 0;
  }

  push(item) {
    if (this.size !== this.maxSize) {
      this.queue[this.tail] = item;
      this.tail = (this.tail + 1) % this.maxSize;
      this.size++;
    }
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.queue[this.head];
    this.queue[this.head] = undefined;
    this.head = (this.head + 1) % this.maxSize;
    this.size--;
    return item;
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = BufferQueue;
