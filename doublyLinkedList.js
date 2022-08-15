/*********************************************** Doubly LikedList By Myself ************************/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class Listing {
  constructor() {
    this.head = null;
  }
  append(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      return newNode;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    newNode.prev = current;
    current = newNode;
    // console.log(current);
    return newNode;
  }
  show() {
    let list = "";
    let current = this.head;
    while (current !== null) {
      list += current.val + "->";
      current = current.next;
    }
    if (!list) return "list is empty";
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

  insertStart(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      return newNode;
    }
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    if (this.head) {
      this.head.prev = null;
    }
    return newNode;
    // let initialArray = this.head;
    // this.head = newNode;
    // this.head.next = initialArray;
  }
  remove() {
    if (this.head === null) return null;
    if (this.head.next === null) {
      let removeNode = this.head;
      this.head = null;
      return removeNode;
    }
    let curr = this.head;
    let prev = this.head.prev;
    let removeNode = null;
    while (curr !== null) {
      prev = curr.prev;
      removeNode = curr;
      curr = curr.next;
    }
    curr = prev;
    prev.next = curr;
    curr.next = null;

    return removeNode;
  }
  removeHead() {
    if (this.head === null) {
      return null;
    }
    if (this.head.next === null) {
      let removeNode = this.head;
      this.head = null;
      return removeNode;
    }
    let removeNode = null;
    let curr = this.head;
    let next = this.head.next;
    next.prev = null;
    removeNode = curr;
    this.head = next;
    return removeNode;
  }
}
let c = new Listing();
c.append("a");
c.append("b");
c.append("c");
c.append("d");
c.append("e");
console.log(c.show());

// /*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ Doubly Linked List From tutorial ////////////////////////////////////////*/
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }
// class DList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   print() {
//     let list = "";
//     // let current = this.head;
//     // while (current !== null) {
//     //   list += current.val + "->";
//     //   current = current.next;
//     // }
//     // return list;
//     let current = this.head;
//     while (current) {
//       list += current.val + " --> ";
//       current = current.next;
//     }
//     return this.head;
//   }
//   insert(val) {
//     this.length++;
//     let newNode = new Node(val);
//     if (this.tail) {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//       return newNode;
//     }
//     this.head = this.tail = newNode;
//     return newNode;
//   }
//   insertHead(val) {
//     this.length++;
//     if (this.head) {
//       let newNode = new Node(val);
//       this.head.prev = newNode;
//       newNode.next = this.head;
//       this.head = newNode;
//       this.head = newNode;
//       return newNode;
//     }
//     this.head = this.tail = newNode;
//   }
//   remove() {
//     if (this.tail) {
//       this.length--;
//       const removeTail = this.tail;
//       this.tail = this.tail.prev;
//       if (this.tail) {
//         this.tail.next = null;
//       } else {
//         this.head = null;
//       }
//       return removeTail;
//     }
//     return undefined;
//   }
//   removeHead() {
//     let removeNode = this.head;
//     if (this.head) {
//       this.length--;
//       this.head = this.head.next;
//       if (this.head) {
//         this.head.prev = null;
//       } else {
//         this.tail = null;
//       }

//       return removeNode;
//     }
//     return undefined;
//   }
// }
// let c = new DList();
// c.insert("a");
// c.insert("b");
// c.insert("c");
// c.insert("d");
// c.insert("e");
// console.log(c.print());
