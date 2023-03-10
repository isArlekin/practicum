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
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[this.head];
  }

  pop() {
    if (this.isEmpty()) {
      return null;
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
