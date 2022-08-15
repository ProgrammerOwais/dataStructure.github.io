/* ######################## Longest Increasing Subsequence ############################
https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/#:~:text=The%20Longest%20Increasing%20Subsequence%20(LIS)%20problem%20is%20to%20find%20the,are%20sorted%20in%20increasing%20order.
The Longest Increasing Subsequence (LIS) problem is to find the length of the longest 
subsequence of a given sequence such that all elements of the subsequence are sorted 
in increasing order. For example, the length of LIS for {10, 22, 9, 33, 21, 50, 41, 60, 80} 
is 6 and LIS is {10, 22, 33, 50, 60, 80}.  ****************************************************/
// $$$$$$$$$$$$$$$$$$$$$ Implementation of LIS by using naive recursion method
let max_ref;
function _LIS(arr, n) {
  if (n == 1) {
    return 1;
  }
  let res,
    maxEndHere = 1;
  for (let i = 1; i < n; i++) {
    res = _LIS(arr, i);
    if (arr[i - 1] < arr[n - 1] && res + 1 > maxEndHere) maxEndHere = res + 1;
  }
  if (max_ref < maxEndHere) max_ref = maxEndHere;
  return maxEndHere;
}
function LIS(arr, n) {
  max_ref = 1;
  _LIS(arr, n);
  return max_ref;
}
let arr = [10, 22, 9, 33, 21, 50, 41, 60];
let n = arr.length;
// console.log("the length  of the array is : ", LIS(arr, n));
// The time complexity is : O(2^n)
// the space complexity O(1)
// There is a case of overlapping sub-problems if you drive run it, so we can use the
// ###############$$$$$$$$$$$$$$$$$$$$$$$$$$$ dynamic programming approach. $$$$$$$$$$$$$$################
function LISDP(arr, n) {
  // for this problem we will use one dimension
  let lis = new Array(n).fill(0);
  let i,
    j,
    max = 0;
  for (i = 0; i < n; i++) {
    lis[i] = 1;
  }
  for (i = 1; i < n; i++) {
    for (j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
      }
    }
  }
  for (i = 0; i < n; i++) {
    if (max < lis[i]) max = lis[i];
  }
  return max;
}
// Time complexity : O(n^2)
// space complexity: O(n)
let arr2 = [10, 22, 9, 33, 21, 50, 41, 60];
let n2 = arr.length;
console.log("The lIS length using dynamic programming is : ", LISDP(arr2, n2));

// There are lot of other methods & techniques are available you can check that
// in the above reference link. Try to execute & understand the nature of dynamic programming & recursion approach
