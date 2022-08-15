/*****
 * To sort an array in ascending order, you will follow the steps below:

1) Iterate through the array from arr[1] to arr[n].
2) Compare the current element (key) to one that came before it.
3) If the data at the current index is less than the data at the previous index, you will 
     compare it to the element before it.
4) You will shift bigger elements to the next index to make space for swapped 
   elements, and then you will iterate the same steps again to sort the complete array.
 */
//input : [6,5,4,2,3]
// output using insertionSort Method: [2,3,4,5,6]
function insertionSorting(array) {
  let i, key, k;
  for (i = 1; i < array.length; i++) {
    key = array[i];
    k = i - 1;
    while (k >= 0 && array[k] > key) {
      array[k + 1] = array[k];
      k -= 1;
    }
    array[k + 1] = key;
  }
  return array;
}
let arr = [6, 5, 4, 2, 3];
console.log(insertionSorting(arr));
// space complexity 0(1); as it does not take any extra space.
// Time complexity 0(n^2)
/*#### This type if sorting is only good for small data sets while for big data sets quiksorting,merge-soring,
###### heapsorting etc are more efficient then this. */
