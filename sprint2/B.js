// Comment it before submitting
// class Node {
//   constructor(value = null, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

function solution(node) {
  let cur = node;
  while (cur !== null) {
    console.log(cur.value);
    cur = cur.next;
  }
}

function test() {
  var node3 = new Node('node3');
  var node2 = new Node('node2', node3);
  var node1 = new Node('node1', node2);
  var node0 = new Node('node0', node1);
  solution(node0);
  /*
  Output is:
  node0
  node1
  node2
  node3
  */
}
