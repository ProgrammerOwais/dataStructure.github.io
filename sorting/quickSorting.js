/*####################################### Quick Sorting ########################################*/
/* Its very similar to merge sort 
Both sorting method has a very similar algorithm i.e use divide & conquer & recursive method
but
           Quick Sort                                       Merge sort
        1) It uses  internal sorting algo       It uses  external sorting 
           means it does not take exernal       means it takes auxiliary memory array.
           memory array.

        2) It is best & most efficient then    It is best & most efficient for big
        other algos in case of smaller data     data sets i.e linked list.
        set i.e small arrays.

        3) worst case time complexity is O(n^2)   worst case time complexity is O(N*logN)

        4) We use pivot value to divide the      We just divide the array in the middle.
         array into sub array.
  **************************************#####################################\\\\\\\\\\\\\///////////////////*/
////////////////////////////  First element as a pivot
const swap = (arr, left, right) => {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};
const partitionLow = (arr, low, high) => {
  //Pick the first element as pivot
  let pivot = arr[low];
  let i = low;

  //Partition the array into two parts using the pivot
  for (let j = low; j <= high; j++) {
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i++;
    }
  }

  swap(arr, i - 1, low);

  //Return the pivot index
  return i - 1;
};

const quicksort = (arr, low, high) => {
  // base condition
  if (low >= high) {
    return;
  }

  // rearrange the elements across pivot
  const pivot = partitionLow(arr, low, high);

  // recur on sub-array containing elements less than pivot
  quicksort(arr, low, pivot - 1);

  // recur on sub-array containing elements more than pivot
  quicksort(arr, pivot + 1, high);
};
//Input:
let arr = [10, 7, 8, 9, 1, 5];
quicksort(arr, 0, arr.length - 1);
console.log(arr);

//Output:
[1, 5, 7, 8, 9, 10];
