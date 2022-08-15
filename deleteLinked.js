class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// const deleteValue = (head, value) => {
//   let prev = null;
//   let curr = head;
//   if (head.val === value) {
//     return head.next;
//   }
//   while (curr !== null) {
//     if (curr.val === value) {
//       prev.next = curr.next;
//     }
//     prev = curr;
//     curr = curr.next;
//   }
//   return head;
// };
// time complexity O(n)
// Space complexity O(1)
/************************************ Recursion Delete Method *****************/
const deleteValue = (head, target) => {
  if (head.val === target) {
    return head.next;
  }
  _deleteValue(head, null, target);
  return head;
};
const _deleteValue = (curr, prev, target) => {
  if (curr === null) {
    return;
  }
  if (curr.val === target) {
    prev.next = curr.next;
    return;
  }

  _deleteValue(curr.next, curr, target);
};
// time complexity O(n);
// space complexity O(n) ->it will create n number of memory stacks in ram.

/**********************************************  RESULT
 * So both method are same iterative first one & recursive but in this
 * scenario the first one iterative is more efficient due to space complexity.
 */

const print = (a) => {
  str = "";
  if (a === null) return "";
  return (str += a.val + "->" + print(a.next));
};

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
const list = deleteValue(a, "e");
console.log(print(list));
