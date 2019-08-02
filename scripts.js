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

let one = new singleNode('1', '8');
let two = new singleNode('2', null);
let three = new singleNode('3', '7');
let four = new singleNode('4', null);
let five = new singleNode('5', null);
let six = new singleNode('6', null);
let seven = new singleNode('7', '8');
let eight = new singleNode('8', '10');
let nine = new singleNode('9', null);
let ten = new singleNode('10', null);
let nidynine = new singleNode('99', '1');

let A = new singleNode('A', '3');
let B = new singleNode('B', '99');

console.log('A =', A);
console.log('B =', B);


$(document).ready(function() {
  $('#output-section-1').text(1);
  $('#output-section-2').text(2);
});
