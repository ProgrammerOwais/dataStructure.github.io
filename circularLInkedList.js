class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  show() {
    let list = "";
    let curr = this.head;
    while (curr !== null) {
      list += curr.val + " --> ";
      //   tail = curr;
      curr = curr.next;
    }
    // tail.next = this.head;
    // curr = tail;
    this.tail.next = this.head;
    if (!list) return "List is empty";
    return list;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
      return newNode;
    }
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
    this.tail = curr.next;
    return newNode;
  }
  insertHead(val) {
    let newNode = new Node(val);
    let next = this.head;
    newNode.next = next;
    this.head = newNode;
    return newNode;
  }
  remove() {
    if (this.head === null) {
      return null;
    }

    let curr = this.head;
    let secondLast = null;
    while (curr.next.next !== null) {
      secondLast = curr.next;
      curr = curr.next;
    }
    secondLast.next = null;
    this.tail = secondLast;
    return this.tail;
  }
}

let listData = new CircularLinkedList();
listData.insert("a");
listData.insert("b");
console.log(listData.show());
