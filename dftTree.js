/****************************************  Depth First Traversal tree Algorithm
 * It works the almost same as BFT but the pattern of execution is 
 * opposite to breadth first traversal.
 * IT starts from the top root element & goes to the depth of their child elements i.e
 *            A   
            /   \
           B     C  
          / \     \
         d   e     f 

         Output => A,B,d,e,c,f
         Lets check how this depth first traversal tree algo works
         First it will take root element (A) , it will remove the (A) & print
         that element than it will go to (B) , will remove the (B) ,& print the B
         then instead of going to (C) as in BFT , it will go to the depth means will
         execute the (d) then will travel to (e) & then to (C) , in the last (f).
        **** In "coder-byte" channel you will get more idea with animation & graphs.****
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

// const dft = (root) => {
//   // here we will use Stack data structure for DFT
//   const stack = [root];
//   while (stack.length > 0) {
//     const curr = stack.pop(); // in BFC we use shift()
//     console.log(curr.val);
//     if (curr.right !== null) stack.push(curr.right);
//     if (curr.left !== null) stack.push(curr.left);
//   }
// };
// console.log(dft(a));
// O(n) is for both time complexity & space complexity

/************************************ Depth First Example in a Recursive way */
const dft = (root) => {
  if (root === null) {
    return;
  }
  console.log(root.val);
  dft(root.left);
  dft(root.right);
};
console.log(dft(a));
// O(n) is for both time complexity & space complexity

/***************** there are three types of dft order
 * 1) pre-order   self,left,right
 * 2) post-order  left,right,self
 * 3) In-order   left,self,right
 * The implementation of code is almost same for all the variations.
 * 1) pre-order ( the one which we done above) 
 *  * In here we take the orders like that 
 *    self , left , right  means(print out the parent before the children)
 *            A   
            /   \
           B     C  
          / \     \
         d   e     f 

         So the output will be
         Output => A,B,d,e,c,f
         Lets execute the output: 
         First it will be at the parent(root) element which is "A" , so here "A" will be 'self'
         then it will go to the left which is "B" , so here "B" will be a 'self' , then it will go to 
         left which is "d" , so "d" will be a 'self' as the "d" doesn't have any left & right so it will
         go to the top "B" as "B" 'self' executed  & the left  also so now its time for right , so it will go to the
         'self' right which is "e"."e" don't have left & right so it will go to the top "B" , now "B" as a 'self'
         executed all the possibilities('self',left,right), so it will go to the top which is "A" , as we know
         "A" is executed as a 'self' & 'left" , its time to execute right side which is "C" , after executing
         "C" as a 'self' it will check the left side (as left is null) so it will directly go to the right which
          is "f". And finally we will get the 
          output => A,B,d,e,c,f by using pre-in order


 * 2) ****************post-order opposite of pre means it will start from depth **************
    In this we follow the order:
    left,right,self
              A   
            /   \
           B     C  
          / \     \
         d   e     f 

         So the output will be
         Output => d,e,B,f,C,A

         ************************************************************************************/
const postIn = (root) => {
  if (root === null) {
    return;
  }
  postIn(root.left);
  postIn(root.right);
  console.log(root.val);
};
console.log(postIn(a));
/*************************************** in-order :=> we follow the order
 * ********************** left,self,right
 */
const inOder = (root) => {
  if (root === null) {
    return;
  }
  inOder(root.left);
  console.log(root.val);
  inOder(root.right);
};
console.log(inOder(a));

/********************************************* Examples*************** */
// Write a function sumTree(root) which sum up all the root elements , here root elements are numbers
/*             3   
             /   \
            2     7 
           / \     \
          4   -2     5
  to solve this problem , we have a many ways , but here I will solve it by using 
  recursive method , its  a little bit complex to understand but in case if yo didn't get
  the idea check out the coder-byte video , its very necessary that how recursion works in 
  the long scenario 
  ******************************************************************/
const a1 = new Node(3);
const b1 = new Node(2);
const c1 = new Node(7);
const d1 = new Node(4);
const e1 = new Node(-2);
const f1 = new Node(5);
a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;
const sumTree = (root) => {
  if (root === null) return 0;
  return sumTree(root.left) + root.val + sumTree(root.right);
};
console.log(sumTree(a1)); // 19
