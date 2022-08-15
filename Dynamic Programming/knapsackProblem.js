/* ######################################### 0-1 knapsack Problem ########################
=> 0-1 means either you will take the complete or none but not fractional or half.
=> knapsack also know as bag with a fixed size/limit. means it will have limited weight capacity.
=> In knapsack problem you will have a 
    1) val[0...n-1] values
    2) wt[0...n-1] weight with associated values
    3) W the weight of the bag/knapsack.

Problem => store the maximum values in the knapsack as much as possible with the wt(weight of values) less than 
           or equal to "W" weight of the bag.
=> It uses the dynamic programming approach i.e store the sub-solutions i.e fibonacci.
=> It has a lot of application in the real world as problem describes its nature by itself. */

//$$$$$$$$$$$$$$#################/// Knapsack Problem without dynamic programming approach
function max(a, b) {
  return a > b ? a : b;
}
function knapsack(W, wt, val, n) {
  // Base cases
  if (n == 0 || W == 0) {
    return 0;
  }
  // If weight of the nth item is
  // more than Knapsack capacity W,
  // then this item cannot be
  // included in the optimal solution
  if (wt[n - 1] > W) {
    return knapsack(W, wt, val, n - 1);
  }
  // Return the maximum of two cases:
  // (1) nth item included
  // (2) not included
  else {
    return max(
      val[n - 1] + knapsack(W - wt[n - 1], wt, val, n - 1),
      knapsack(W, wt, val, n - 1)
    );
  }
}
// let val = [60, 100, 120];
// let wt = [10, 20, 30];
// let W = 50;
// let n = val.length;
// console.log(knapsack(W, wt, val, n));
// The time complexity for the above function is : O(2^n)
/* space complexity ; O(n) i.e auixliary space

                                              K(n, W)
                                              K(3, 2)  
                                          /             \ 
                                         /                \               
                                     K(2, 2)               K(2, 1)
                                   /       \                /    \ 
                                  /         \              /       \
                                K(1, 2)    K(1, 1)         K(1, 1)    K(1, 0)
                                /  \         /   \             /         \
                               /    \      /       \          /            \
                         K(0, 2)  K(0, 1)  K(0, 1)  K(0, 0)  K(0, 1)   K(0, 0)

As from the above executing structure the sub-problems are evaluated again & again, this problem has
overlapping sub-problems property so to make it more efficient we will use dynamic programming technique.
*/

//################################# Knapsack With Dynamic Programming Approach ###################################
function knapsackDP(W, wt, val, n) {
  let i, w;
  let k = new Array(n + 1);
  //build a k[][] table for storing result
  for (i = 0; i <= n; i++) {
    k[i] = new Array(W + 1);
    for (w = 0; w <= W; w++) {
      if (i == 0 || w == 0) {
        k[i][w] = 0;
      } else if (wt[i - 1] <= w) {
        k[i][w] = max(val[i - 1] + k[i - 1][w - wt[i - 1]], k[i - 1][w]);
      } else k[i][w] = k[i - 1][w];
    }
  }
  return k[n][W];
}
// time complexity O(N*W)
// space complexity O(N*W)

let val = [60, 100, 120];
let wt = [10, 20, 30];
let W = 50;
let n = val.length;
console.log(knapsackDP(W, wt, val, n));
