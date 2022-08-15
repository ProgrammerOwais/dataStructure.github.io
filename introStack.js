/*\\\\\\\\\\\\\\ Both STACK & QUEUE  are linear data-structures just like 
  array & linked list but in stack & queue you are allowed to perform only specific operation
  unlike in array/linkedList to traversal , accessing randomly etc.
  It will depends on Software development to which data structure you will need. */
//////// IN STACK, the pattern follows the LIFO(first-in-last-out) OR FILO(First in last out)
// To access some specific data in stack, first you will need to remove all the top elements

class StackNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(val) {
    if (this.size === 0) {
      this.top = new StackNode(val);
    } else {
      let pushNode = new StackNode(val);
      pushNode.next = this.top;
      this.top = pushNode;
    }
    this.size++;
  }
  // time complexity O(1);
  // space complexity O(n);
  getTop() {
    return this.top.val;
  }
  pop() {
    if (this.size === 0) {
      return null;
    }
    this.top = this.top.next;
    this.size--;
    return this.top.val;
  }
  // time complexity O(1);
  // space complexity O(n);
  // You can also perform the following operations on stack data-structure
  // peek() to access the top most element in stack without removing it from stack
  // isFull() & isEmpty to check whether the stack is full or not.
}
let stack1 = new Stack();
stack1.push("a");
stack1.push("b");
stack1.push("c");
stack1.push("d");
console.log(stack1.size);
