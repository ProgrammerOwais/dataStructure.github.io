/* ############################ Dynamic Programming #############################
=> Dynamic Programing is an algorithmic paradigm which 
1) divides the larges & complex problems into sub-problems
2) solve the sub-problems
3) store their sub-problems result
4) Don't solve the repeated step ,  Re-use sub-problems solution.

*** Form the definition it seems quite similar to divide & conquer
  but unlike divide & conquer, in dynamic problem the sub problems 
  repeats themselves multiple times.i.e Fibonacci Series etc. ***
  For more detail
  https://www.simplilearn.com/tutorials/data-structure-tutorial/what-is-dynamic-programming

 If the problem abides by properties given below, 
 only then it can be solved using a dynamic programming paradigm:

Optimal Substructure: A problem is said to have an optimal substructure 
               if we can formulate a recurrence relation.
Overlapping Subproblem: The recursive solution to the problem contains 
                   subproblems that are repeated multiple times. 

#####***** The dynamic programming reduces the optimization of time complexity from 
          exponential(2^n) to polynomials(n^2) ********************** $$$$$$$$$$$$$$
    
    Lets find the fibonacci of any number           */
function fib(n) {
  if (n == 0) return 0;
  else if (n == 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
// console.log(fib(6));
// In the code above, the number of computations and
// function calls performed will rise with the value of num. Thus,
// the time complexity will be of increasing nature, that is, O(2^n).
/*In the code above, the number of computations and function 
calls performed will rise with the value of num. 
Thus, the time complexity will be of increasing nature, that is, O(2^n).

# Implementation of Fibonacci Series Using Dynamic Programming by using recursive method(Also know as Top-down)##*/
let res = new Array(30).fill(-1);
function dynamicfib(n) {
  if (n <= 1) return n;
  // if solution already exists
  if (res[n] != -1) {
    return res[n];
  }
  res[n] = dynamicfib(n - 1) + dynamicfib(n - 2);
  return res[n];
}

console.log(dynamicfib(5));
// the time complexity of dynamic approach is O(n)

/*## Implementation of Fibonacci Series Using Dynamic Programming by using iterative method(Also know as Top-down)#*/

// function dynamicfib(n) {
//   res[0] = 0;
//   res[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     res[i] = res[i - 1] + res[i - 2];
//   }
//   return res[n];
// }
// console.log(dynamicfib(6));
