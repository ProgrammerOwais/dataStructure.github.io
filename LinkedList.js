class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Listing {
  constructor() {
    this.head = null;
  }
  append(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(val);
    // console.log(current);
  }
  show() {
    let list = "";
    let current = this.head;
    while (current !== null) {
      list += current.val + "->";
      current = current.next;
    }
    return list;
  }
  contain(val) {
    let current = this.head;
    while (current !== null) {
      if (current.val === val) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  insertEnd(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(val);
  }
  insertStart(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }
    let initialArray = this.head;
    this.head = new Node(val);
    this.head.next = initialArray;
  }
}
let c = new Listing();
c.append("a");
c.append("b");
c.append("c");
c.append("d");
c.append("e");
c.append("f");
console.log("Linked list before the  insertion operator : ", c.show());
c.insertEnd("z");
console.log("Linked list after the  insertion operator : ", c.show());
