// Comment it before submitting
// class Node {
//   constructor(value = null, next = null, prev = null) {
//     this.value = value;
//     this.next = next;
//     this.prev = prev;
//   }
// }

function solution(node) {
  const newList = new Node(0);
  let cur = node;

  while (cur.next !== null) {
    cur = cur.next;
  }

  let it = newList;
  while (cur !== null) {
    const newNode = new Node(cur.value);
    newNode.prev = cur.next;
    newNode.next = cur.prev;

    it.next = newNode;

    it = it.next;
    cur = cur.prev;
  }

  return newList.next;
}

function test() {
  var node3 = new Node('node3');
  var node2 = new Node('node2', node3);
  var node1 = new Node('node1', node2);
  var node0 = new Node('node0', node1);
  node1.prev = node0;
  node2.prev = node1;
  node3.prev = node2;
  var newHead = solution(node0);

  let cur = newHead;
  while (cur !== null) {
    console.log(cur.value);
    cur = cur.next;
  }

  /*
  result is newHead === node3
  node0.prev === node1
  node1.next === node0
  node1.prev === node2
  node2.next === node1
  node2.prev === node3
  node3.next === node2
  */
}

// test();
