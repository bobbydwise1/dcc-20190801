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

class node {
  constructor(name) {
    this.name = name;
  }

  addList(arrayOfSingleNodes) {
    for (i=0; i<arrayOfSingleNodes.length; i++) {
      arrayOfSingleNodes[i].next = 
    }
  }
}

let one = new singleNode('1');
let two = new singleNode('2');
let three = new singleNode('3');
let four = new singleNode('4');
let five = new singleNode('5');
let six = new singleNode('6');
let seven = new singleNode('7');
let eight = new singleNode('8');
let nine = new singleNode('9');
let ten = new singleNode('10');
let nidynine = new singleNode('99');

let alist = [three,seven,eight,ten];
let blist = [nidynine,one,eight,ten];



$(document).ready(function() {
  $('#output-section-1').text(1);
  $('#output-section-2').text(2);
});
