/*###################################### SHELL-SORTING ALGORITHM ##########################################*/
/* Shell-sort is an advance version of insertion sort, the main feature of this sort is that its 
time complexity is less than insertion sort.
** Complexity in the Worst-Case Scenario: Less Than or Equal to O (n^2)
** Complexity in the Best Case: O(n*Log n)  
** Complexity in the Average Case: O(n*log n).

/###############################  Algorithm for the shell sort ###########################
Its algo is a little bit complex than simple insertion sort to understand it completely follow the
link https://www.simplilearn.com/tutorials/data-structure-tutorial/shell-sort.
Here I will only summarize it.
1) In this algo we use the interval     i = i * 3 + 1
                                        Where i is the interval with a starting value of 1 
i.e in a array it compares the value from starting position 0 with 4 , 1 with 5 , 2 with 6 & so on,
after that sorting is completed it then sort in a simple insertion sorting. 

Step 1: Set the value of i.

Step 2: Separate the list into sub-lists with the same i interval.

Step 3: Using insertion sort, sort these sub-lists.

Step 4: Continue until the entire list has been sorted.
                               **************************/
function shellSort(array) {
  let i, j, k, temp;
  for (i = array.length / 2; i > 0; i = i / 2) {
    for (j = i; j < array.length; j++) {
      for (k = j - i; k >= 0; k = k - i) {
        // console.log("hi3");
        if (array[k + i] >= array[k]) {
          break;
        } else {
          temp = array[k];
          array[k] = array[k + 1];
          array[k + 1] = temp;
        }
      }
    }
  }
}
let arr = [17, 21, 27, 13, 32, 35, 45, 47];
console.log("array before sorting is : ", arr);
shellSort(arr);
console.log("array after sorting is : ", arr);
