var MyNode = function (val) {
  this.val = val;
  this.next = null;
  this.prev = null;
};

var MyLinkedList = function () {
  this.length = 0;
  this.head = new MyNode(0);
  this.tail = new MyNode(0);
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.length) {
    return -1;
  }
  let cur = this.head;
  for (let i = 0; i <= index; i++) {
    cur = cur.next;
  }

  return cur.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new MyNode(val);
  const pred = this.head;
  const target = pred.next;

  node.prev = pred;
  node.next = target;
  pred.next = node;
  target.prev = node;

  this.length++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new MyNode(val);
  const pred = this.tail.prev;
  const target = this.tail;

  node.prev = pred;
  node.next = target;
  pred.next = node;
  target.prev = node;

  this.length++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.length || index < 0) {
    return;
  }

  const node = new MyNode(val);
  let pred = this.head,
    target;

  for (let i = 0; i < index; i++) {
    pred = pred.next;
  }
  target = pred.next;

  node.prev = pred;
  node.next = target;
  pred.next = node;
  target.prev = node;

  this.length++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.length) {
    return;
  }

  let pred = this.head,
    target;
  for (let i = 0; i < index; i++) {
    pred = pred.next;
  }
  target = pred.next.next;

  pred.next = target;
  target.prev = pred;
  this.length--;
};
