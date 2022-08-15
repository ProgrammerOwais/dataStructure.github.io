/*********###############3$$$$$$$$$$$$$$$$$$ Matrix chain Order $$$$$$$$$$$$#################***********
 * https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/ */
function matrixChainOrder(arr2, i, j) {
  if (i == j) {
    return 0;
  }
  // Place parenthesis at different places
  // between first and last matrix,
  // recursively calculate count of multiplications
  // for each parenthesis placement
  // and return the minimum count
  let min = Number.MAX_VALUE;
  let k = 0;
  for (k = i; k < j; k++) {
    let count =
      matrixChainOrder(arr2, i, k) +
      matrixChainOrder(arr2, k + 1, j) +
      arr2[i - 1] * arr2[k] * arr2[j];
    if (count < min) {
      min = count;
    }
  }
  return min;
}
var arr = [1, 2, 3, 4, 3];
var N = arr.length;
console.log(matrixChainOrder(arr, 1, N - 1));
