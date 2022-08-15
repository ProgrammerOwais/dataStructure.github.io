class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
/********************************************* In iterative way */
const reverseLinkedList = (head) => {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
// time complexity O(n)
// space complexity O(1)

/*********************************************** In Recursive way **********************/
// const reverseLinkedList = (curr, prev = null) => {
//   if (curr === null) {
//     return prev;
//   }
//   let next = curr.next;
//   curr.next = prev;
//   prev = curr;
//   return reverseLinkedList(next, curr);
// };
// time complexity O(n);
// space complexity O(n)
///////////////////////////////// So the first one "Iterative way is more efficient *********

const r = reverseLinkedList(a);
const print = (a) => {
  str = "";
  if (a === null) return "";
  return (str += a.val + "->" + print(a.next));
};
console.log(print(r));
