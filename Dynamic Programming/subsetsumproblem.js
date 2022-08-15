/* ####################$$$$$$$$$$$$$$$$$ Sub set sum problem #######################$$$$$$$$$$$$$$$$$$$$$4
Link for complete detail : https://www.geeksforgeeks.org/subset-sum-problem-dp-25/
 **This problem states that you will have to given a set & a target sum value
    => set[ of non-negative numbers] , 
    => A target sum i.e sum = value
   you will need to check out wether by adding sub-elements of set can I get the target 
   sum value.means (true or not)
   i.e 
   input = [10,4,2,8,12];
   sum = 6
   output = true => subset(4+2) = sum;
   Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 30
   Output: False

/*****************$$$$$$$$$$$$$$$$$$$$$$$$ Solving the subset sum  problem  by using the recursion approach method */
function isSubsetSum(set, n, sum) {
  if (sum == 0) {
    return true;
  }
  if (n == 0) {
    return false;
  }
  // If last element is greater than sum,
  // then ignore it
  if (set[n - 1] > sum) {
    return isSubsetSum(set, n - 1, sum);
  }
  /* else, check if sum can be obtained
        by any of the following
        (a) including the last element
        (b) excluding the last element */
  return (
    isSubsetSum(set, n - 1, sum) || isSubsetSum(set, n - 1, sum - set[n - 1])
  );
}
// if they try all subset then time complexity = exponential

let set = [3, 4, 5, 2];
let sum = 9;
let n = set.length;
// console.log(isSubsetSum(set, n, sum));

/************$$$$$$$$$$$$$$$ Solving the subset sum  problem  by using the dynamic programming approach method */
function isSubsetSumDP(set, n, sum) {
  let subset = new Array(sum + 1);
  for (let i = 0; i < sum + 1; i++) {
    subset[i] = new Array(sum + 1);
    for (let j = 0; j < n + 1; j++) {
      subset[i][j] = 0;
    }
  }
  // If sum is 0, then answer is true
  for (let i = 0; i <= n; i++) {
    subset[0][i] = true;
  }
  // If sum is not 0 and set is empty,
  // then answer is false
  for (let i = 0; i <= sum; i++) {
    subset[i][0] = false;
  }
  // Fill the subset table in bottom
  // up manner
  for (let i = 1; i <= sum; i++) {
    for (let j = 1; j <= n; j++) {
      subset[i][j] = subset[i][j - 1];
      if (i >= set[j - 1])
        subset[i][j] = subset[i][j] || subset[i - set[j - 1]][j - 1];
    }
  }
  // uncomment this code to print table
  //   for (let i = 0; i <= sum; i++) {
  //     for (let j = 0; j <= n; j++) console.log(subset[i][j]);
  //   }
  return subset[sum][n];
}
// Time complexity: O(sum *n)
// Space complexity: O(sum *n)
let set2 = [3, 4, 5, 2];
let sum2 = 6;
let n2 = set.length;
console.log(isSubsetSumDP(set2, sum2, n2));
