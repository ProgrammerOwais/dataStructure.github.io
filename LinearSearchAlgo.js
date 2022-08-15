/************\\\\\\\\\\\\\ 1) Linear Search Algorithm ///////////////////////////// */
/* In this algorithm we search an element in a collection of elements one by one until it
*  gets/match to the desired elements if not then at the end it will return null.
** SEARCHING => The process of fetching specific element in a collection of element.
** This algo is best in two scenario
1) if the list/array is small
2) if the list/array is un-order
3) The time & space complexity is O(n)
*** IT will be considered successful if search items found otherwise unsuccessful.
 */
/********************* IMPLEMENTATION OF LINEAR SEARCH ALGORITHM *********************/
function linearSearch(array, searchItem) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == searchItem) {
      return array[i];
    }
  }
  return null;
}
let arr = [1, 2, 3, 4, 5];
let item = 3;
console.log("The value of 3 in an array is : ", linearSearch(arr, item));
