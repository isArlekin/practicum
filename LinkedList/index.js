var Node = function (val, next = null) {
  this.val = val;
  this.next = next;
};

var Index = function () {
  this.head = new Node(0);
  this.size = 0;
};

Index.prototype.addAtHead = function (key) {
  const toAdd = new Node(key);
  const prev = this.head;

  toAdd.next = prev.next;
  prev.next = toAdd;

  this.size++;
};

Index.prototype.remove = function (key) {
  if (this.size === 0) {
    return;
  }
  let prev = this.head;
  let cur = prev.next;

  while (cur !== null) {
    if (cur.val === key) {
      break;
    }
    prev = cur;
    cur = cur.next;
  }

  if (cur === null) {
    return;
  }

  prev.next = prev.next.next;

  this.size--;
};

Index.prototype.indexOf = function (key) {
  if (this.size === 0) {
    return -1;
  }

  let cur = this.head.next;
  let index = 0;

  while (cur !== null) {
    if (cur.val === key) {
      break;
    }
    index++;
    cur = cur.next;
  }

  if (cur === null) {
    return -1;
  }

  return index;
};

const list = new Index();
list.addAtHead(1); // 0
list.addAtHead(2); // 1
list.addAtHead(3); // 2
list.addAtHead(4); // 3

console.log(list.indexOf(1));
console.log(list.indexOf(2));
console.log(list.indexOf(3));
console.log(list.indexOf(4));

console.log(list.indexOf(5));
