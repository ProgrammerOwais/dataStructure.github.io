/*############################# Counting Sorting Algorithm => A non comparison sorting algorithm #######*/
/*** It is an integer sorting algorithm & uses the input as the index thats why we can't perform 
 * that type of sorting on linked list.
 * 
 * ########## HOW COUNTING SORT ALGORITHM WORKS
 * // for more detail check out the link
 * https://learnersbucket.com/tutorials/algorithms/counting-sort-algorithm-in-javascript/
 * 1) Find the max value in the array & store it to some variable say "k";
 * 2) Create a temporary array of length max + 1 initially fills with 0s.
 * 3)  Store the frequency of each element in the array at that element’s index in the temporary array.
        For example: if the count of element 1 is 3 then, 3 is stored in the 1st 
        position of the temporary array. If the element is not present 
        in the array, then 0 will be already present there as the default value.
   4) Store the comulative sum of the elements of the temporary array. It helps in placing the elements
      into correct index of the sorted array.
      i.e at each index store its frequency + frequency of its previous index
   5) Find the index of the each element of the original array in the temporary array.
      this gives the comulative count & Place the element at it index.
    6) After placing each element at its correct position, decrease its count by one.
 */
/* ################################# Counting sort algorithm on an array of positive integers */
const countingSort = (inputArr, n = inputArr.length) => {
  let max = Math.max(...inputArr);
  let t;
  let temp = new Array(max + 1).fill(0);
  //Count the frequency of each element in the original array
  //And store it in temp array
  for (let i = 0; i < n; i++) {
    // most efficient method to find the n-times occurrence of the element.
    t = inputArr[i];
    temp[t]++;
  }
  // comulative frequencey
  for (let i = 1; i <= max; i++) {
    temp[i] = temp[i] + temp[i - 1];
  }
  let outputArr = new Array(n).fill(0);
  // logic/formula to sort the elements in output array
  // Add elements of array A to array B
  for (let i = n - 1; i >= 0; i--) {
    t = inputArr[i];
    outputArr[temp[t] - 1] = t;
    // Decrement the count value by 1
    temp[t] = temp[t] - 1;
  }
  return outputArr;
};
//Input:
const arr = [1, 3, 2, 8, 5, 1, 5, 1, 2, 7];
console.log(countingSort(arr));

//Output:
[1, 1, 1, 2, 2, 3, 5, 5, 7, 8];

// ** I executed this in register its working perfect

// ********** It is better than comparison based sorting method because there is
// no comparison but as it is integer sort if the integer is very large
// then this technique is not good for sorting *******************************.
/*
Time complexity
There are basically 5 loops running one after another (after find the max element). 
Thus we can check the time complexity of each one.

Loop	Time
1st	    Θ(max)
2nd	    Θ(size)
3rd	    Θ(max)
4th	    Θ(size)
5th	    Θ(size)
Overall complexity = O(max) + O(size) + O(max) + O(size) + O(size) = O(max + size)

  Worst	           Average	         Best
O(max + size)	O(max + size)	O(max + size)  

The space complexity of Counting Sort is O(max). 
The larger the range of elements, the larger is the space complexity.

/* ################################# Counting sort on array of negative integers 
        While sorting negative integers we face certain road blocks with counting 
        sort because there are no negative array indices. So what we do is,
         we find the minimum element and we 
        will store count of that minimum element at zero index.*/
const countingSortNegative = (arr, n = arr.length) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let range = max - min + 1;
  let count = new Array(range).fill(0);
  let output = new Array(n).fill(0);

  //Store the frequency
  for (let i = 0; i < n; i++) {
    count[arr[i] - min]++;
  }

  //Accumulate the frequency
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  //Sort based on frequency
  for (let i = n - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  return output;
};
// Input:
const arr2 = [-5, -10, 0, -3, 8, 5, -1, 10];
console.log(countingSortNegative(arr2));

//Output:
[-10, -5, -3, -1, 0, 5, 8, 10];

/* ################################# Counting sort on array of characters
                  Same as the negative numbers, we cannot use characters the array 
                  indexes, but we get the ASCII value of the characters as an index and the sort them 
                  and covert those ASCII value back to the characters.*/
const countingSortStr = (str) => {
  let arr = str.split("");
  let n = str.length;
  const output = new Array(n);

  // Create a count array to store count of inidividul
  // characters and initialize count array as 0
  const count = new Array(256).fill(0);

  // store count of each character
  for (let i = 0; i < n; i++) {
    count[arr[i].charCodeAt()]++;
  }

  // Change count[i] so that count[i] now contains actual
  // position of this character in output array
  for (let i = 1; i <= 255; i++) {
    count[i] += count[i - 1];
  }

  // Build the output character array
  // To make it stable we are operating in reverse order.
  for (let i = n - 1; i >= 0; i--) {
    output[count[arr[i].charCodeAt()] - 1] = arr[i].charCodeAt();
    --count[arr[i].charCodeAt()];
  }

  //Convert the ASCII Value to characters again
  return output.map((e) => String.fromCharCode(e));
};
//Input:
console.log(countingSortStr("learnersbucket"));

//Output:
("abceeeklnrrstu");
