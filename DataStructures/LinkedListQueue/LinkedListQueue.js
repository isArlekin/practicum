class LinkedListQueue {
  constructor() {
    this.list = new Node();
    this.head = this.list;
    this.tail = this.list;
    this._size = 0;
  }

  get() {
    if (this.isEmpty()) {
      return null;
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

module.exports = LinkedListQueue;
