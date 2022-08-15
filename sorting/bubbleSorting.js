/* #################################### Bubble sorting Algorithm #################################
=> It is in-place sorting algorithm
=> It is the simplest algorithm is sorting.
=> We use two loops, the inner loop check the elements if they are in wrong order swap them.
=> For swapping we will use ES6 array destructuring for two swaping elements
time complexity O(n^2);
space complexity O(1); */
const bubbleSort = (arr) => {
  let size = arr.length;
  let swap = false;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    if (!swap) {
      break;
    }
  }
  return arr;
};
let arr = [54, 2, 6, 9, 6, 1, 5];
console.log("Array before sorting is : ", arr);
bubbleSort(arr);
console.log("Array after sorting is : ", arr);
