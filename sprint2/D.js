// Comment it before submitting
// class Node {
//   constructor(value = null, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

function solution(node, value) {
  let cur = node;
  let i = 0;

  while (cur !== null) {
    if (value === cur.value) {
      return i;
    }
    i++;
    cur = cur.next;
  }

  return -1;
}

function test() {
  var node3 = new Node('node3');
  var node2 = new Node('node2', node3);
  var node1 = new Node('node1', node2);
  var node0 = new Node('node0', node1);
  const index = solution(node0, 'node4');
  console.log(index);
}
