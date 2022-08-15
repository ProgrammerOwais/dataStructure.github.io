/* ######################################### MERGE SORT ALGORITHM #######################################
Merge sort is one of the most fastest & efficient sort algorithm.
** It uses divide & conquer technique Also and recursive method.
The complete detail of this topic is here 
https://learnersbucket.com/tutorials/algorithms/merge-sort-javascript/
Steps: 
1) Divide the unsorted list into n-sub list i.e upto only one element (contain) in the  sub list. 
2) Repeat this process until it reached to the single sub element in the list then sort these single
sub-list elements, after that reverse the process means merge these sorted sub-list elements & thus 
at the end you will get the sorted list.

/*################## Difference between quick sort & merge sort algo ############
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

**************************************************************************/
const mergeSortRecursion = (array) => {
  let size = array.length;
  if (size == 1) {
    return array;
  }
  let mid = Math.floor(size / 2);
  let leftArray = array.slice(0, mid);
  let rightArray = array.slice(mid, size);
  return merge(mergeSortRecursion(leftArray), mergeSortRecursion(rightArray));
};
const merge = (leftArray, rightArray) => {
  let result = [];
  let leftidx = 0;
  let rightidx = 0;
  while (leftidx < leftArray.length && rightidx < rightArray.length) {
    if (leftArray[leftidx] < rightArray[rightidx]) {
      result.push(leftArray[leftidx]);
      leftidx++;
    } else {
      result.push(rightArray[rightidx]);
      rightidx++;
    }
  }
  while (leftidx < leftArray.length) {
    result.push(leftArray[leftidx]);
    leftidx++;
  }
  while (rightidx < rightArray.length) {
    result.push(rightArray[rightidx]);
    rightidx++;
  }
  return result;
};
let arr = [10, 7, 8, 9, 1, 5];
console.log("The array before soring is : ", arr);
console.log("The array after sorting is : ", mergeSortRecursion(arr));
