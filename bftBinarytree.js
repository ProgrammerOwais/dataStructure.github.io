/************* Here in this program we will explore the breadth first traversal
 * algorithm by using binary tree.
 * also watch the coder byte video if in case you didn't get.
 */
/********** WHAT IS TREE
 * A tree is a collection of nodes & edges(path) where
 * it has only one root element
 * & one unique path between two nodes
 * 
 ********** WHAT IS BINARY TREE
  A type of tree structure where parent contain at most two child ( not more than two children.)
 ********* BFT => Breath First Traversal
  It is a type of algorithm in which we say that first we fill
  execute or in fact remove the ist level of element then 2nd level of 
  element & up to so on & then we will get the printed result of that elements .i.e
     
              A    first level
            /   \
           B     C  2nd level
          / \     \
         d   e     f 3red level

         Output => A,B,C,d,e,f
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
const breadthFirstShow = (root) => {
  // here we will use queue data structure for BFT
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.left != null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
    console.log("the BFT algo  output is : ", curr.val);
  }
};
// breadthFirstShow(a);
//The time complexity is O(|v|+|E|)
//space complexity O(|E|);

/******************************** BREADTH FIRST EXAMPLE 2
 * Write a function bft(root,target) , that takes root of a binary tree
 * & target value as an argument & check wether the target value contains or
 * not
 *
 *
 */
const bft = (root, target) => {
  // here we will use queue data structure for BFT
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.val === target) {
      return true;
    }
    if (curr.left != null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
  return false;
};
console.log(bft(a, "c")); //true
console.log(bft(a, "x")); //false

/******************************** BREADTH FIRST EXAMPLE 3
 * Write a function bftSum(root) , that takes root of a binary tree
 * & returns the sum of root elements , here we will assume root elements
 * are numbers
 *
 */
const num1 = new Node(5);
const num2 = new Node(5);
const num3 = new Node(5);
const num4 = new Node(-5);
const num5 = new Node(5);
const num6 = new Node(5);
num1.left = num2;
num1.right = num3;
num2.left = num4;
num2.right = num5;
num3.right = num6;
const bftSum = (root) => {
  // here we will use queue data structure for BFT
  const queue = [root];
  let sum = 0;
  while (queue.length > 0) {
    const curr = queue.shift();
    sum += curr.val;
    if (curr.left != null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
  return sum;
};
console.log(bftSum(num1)); // 20
