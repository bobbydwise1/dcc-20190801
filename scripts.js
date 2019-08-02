/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.

Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.
*/

class singleNode {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

const findIntersectNode = (head1, head2) => {
  let answer = null;
  while (head1.value != null) {
    if (head1.next === null) {break}
    temp = head2;
    while (temp.value != null) {
      if (head1.value === temp.value) {
        answer = head1.value;
        break;
      } else {
        if (temp.next === null) {break}
        temp = temp.next;
      }
    }
    head1 = head1.next;
  }
  return answer;
}

let node10 = new singleNode('10', null);
let node8 = new singleNode('8', node10);
let node7 = new singleNode('7', node8);
let node1 = new singleNode('1', node8);
let node2 = new singleNode('2', null);
let node3 = new singleNode('3', node7);
let node4 = new singleNode('4', null);
let node5 = new singleNode('5', null);
let node6 = new singleNode('6', null);
let node9 = new singleNode('9', null);
let node99 = new singleNode('99', node1);

let nodeA = new singleNode('A', node3);
let nodeB = new singleNode('B', node99);

console.log('A =', nodeA);
console.log('B =', nodeB);

$(document).ready(function() {
  $('#output-section-1').text(JSON.stringify(nodeA));
  $('#output-section-2').text(JSON.stringify(nodeB));
  $('#output-section-3').text(JSON.stringify(findIntersectNode(nodeA, nodeB)));
});
