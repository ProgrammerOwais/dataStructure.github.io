/************* queue is a type of data-structure , it is a collection of items
 *  which follows the pattern of "FIFO" means first-in-first-out. In this type
 * of data structure we enter the data at the end of queue & remove the data
 * at the front (start) of queue. It has very uses
 * 1) "first come, first serve" order
 * 2) tracking request for a limited resources.
 * 3) Graph algorithms
 */
/*** With the help of array shift/push we can do this but as we know
 * that by shifting an element
 * in an array the other elements needs to align which will take
 * time complexity O (n)
 * but in queue case time complexity is O(1);
 * In queue, you can only perform specific operation due to its security & use case
 * you can perform insertion at one end & removal at another end;
 */
class QueueNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new QueueNode(val);
    if (this.size === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.size++;
  }
  dequeue() {
    if (this.size == 0) {
      return null;
    }
    if (this.size === 1) {
      this.back = null;
    }
    const removeNode = this.front;
    this.front = this.front.next;
    this.size--;

    return removeNode.val;
  }
}
// You can also perform the following operations on queue data-structure
// peek() to access the top most element in stack without removing it from stack
// isFull() & isEmpty to check whether the stack is full or not.
const q1 = new Queue();
q1.enqueue("a");
q1.enqueue("b");
q1.enqueue("c");
q1.enqueue("d");
console.log(q1.dequeue());
console.log(q1.dequeue());
console.log(q1.dequeue());
console.log(q1.dequeue());
console.log(q1.dequeue());
console.log(q1.dequeue());
console.log(q1.dequeue());
// console.log(q1.size);
