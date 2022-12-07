// Comment it before submitting
// class Node {
//   constructor(value = null, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

function solution(node, index) {
  const dummy = new Node(0, node);
  let prev = dummy;
  let cur = prev.next;
  let i = 0;

  while (cur !== null) {
    if (i === index) {
      prev.next = cur.next;
      break;
    }
    prev = cur;
    cur = cur.next;
    i++;
  }

  return dummy.next;
}

function test() {
  var node3 = new Node('node3');
  var node2 = new Node('node2', node3);
  var node1 = new Node('node1', node2);
  var node0 = new Node('node0', node1);
  solution(node0, 3);
}
