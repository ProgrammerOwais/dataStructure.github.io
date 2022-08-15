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
    this._append(val, this.head);
  }
  _append(val, curr) {
    if (curr.next === null) {
      curr.next = new Node(val);
      return;
    }
    this._append(val, curr.next);
  }
  show() {
    const print = this._show(this.head);
    console.log(print);
  }
  _show(curr) {
    if (curr == null) return "";
    return curr.val + "->" + this._show(curr.next);
  }
  contain(val) {
    return this._contain(val, this.head);
  }
  _contain(val, curr) {
    if (curr === null) return false;
    if (curr.val === val) return true;
    return this._contain(val, curr.next);
  }
}
let c = new Listing();
c.append(2);
c.append(4);
c.append(5);
console.log(c.head.val + c.head.next.val);
