/*####################################### Selection Sort #######################################*/
// link for full detail: https://www.simplilearn.com/tutorials/data-structure-tutorial/selection-sort-algorithm
/*** Selection sort is effective & efficient algorithm based on comparison operations
 * \\\\\\\\\\\ ALGORITHM OF SELECTION SORT ////////////////////////////
 * 1) set the min to the location 0
 * 2) Look for the smallest element on the list
 * 3) Replace the value at location min to a different value
 * 4) Increase min to point to the next value
 * 5) Continue until the list is sorted.
 */
function selectionSort(array) {
  let i, j, min;
  for (i = 0; i < array.length - 1; i++) {
    min = i;
    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    let temp = array[min];
    array[min] = array[i]; // replacing the
    array[i] = temp; //             elements
  }
  return array;
}
let arr = [15, 30, 29, 14, 39, 11];
console.log("The array before selection sort is ", arr);
console.log("The array after selection sort is ", selectionSort(arr));

// The time complexity is O(n^2)
// The space complexity is O(1)
