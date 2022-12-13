class Deque {
  static ERROR = 'error';

  constructor(maxSize) {
    this.maxSize = maxSize;
    this.size = 0;
    this.head = 0;
    this.tail = 0;
    this.array = new Array(maxSize);
  }

  push_front(element) {
    if (this.is_full()) {
      return Deque.ERROR;
    }

    this.head = (this.head - 1 + this.maxSize) % this.maxSize;
    this.array[this.head] = element;

    this.size++;
  }

  push_back(element) {
    if (this.is_full()) {
      return Deque.ERROR;
    }

    this.array[this.tail] = element;
    this.tail = (this.tail + 1) % this.maxSize;
    this.size++;
  }

  pop_front() {
    if (this.is_empty()) {
      return Deque.ERROR;
    }
    const element = this.array[this.head];
    this.array[this.head] = undefined;
    this.head = (this.head + 1) % this.maxSize;

    this.size--;
    return element;
  }

  pop_back() {
    if (this.is_empty()) {
      return Deque.ERROR;
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
