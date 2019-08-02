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

let node1 = new singleNode('1', '8');
let node2 = new singleNode('2', null);
let node3 = new singleNode('3', '7');
let node4 = new singleNode('4', null);
let node5 = new singleNode('5', null);
let node6 = new singleNode('6', null);
let node7 = new singleNode('7', '8');
let node8 = new singleNode('8', '10');
let node9 = new singleNode('9', null);
let node10 = new singleNode('10', null);
let node99 = new singleNode('99', '1');

let nodeA = new singleNode('A', '3');
let nodeB = new singleNode('B', '99');

console.log('A =', nodeA);
console.log('B =', nodeB);


$(document).ready(function() {
  $('#output-section-1').text(1);
  $('#output-section-2').text(2);
});
