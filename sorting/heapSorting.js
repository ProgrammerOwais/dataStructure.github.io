/*######################################### HEAP SORTING #########################################
A complete detail you can find
https://learnersbucket.com/tutorials/algorithms/heap-sort-algorithm-in-javascript/

It is a comparison base algorithm. It is the advance version of selection sort instead of
of using linear time we can use head-data structure to make the list sorted.

=> It is in-place sorting algorithm
=> It is a tree base sort which takes input array & convert it into a tree by using certain formula.
Heap sort works using heap data structure.

Heap is a special tree based data structure. A binary tree is 
said to follow a heap data structure if

It is a complete binary tree.
All nodes are either greater than or equal to or less than or equal to 
each of its children. If the parent nodes are greater than their child nodes, heap is called a Max-Heap, 
and if the parent nodes are smaller than their child nodes, heap is called Min-Heap

To sort in ascending order

As the tree satisfies Max-Heap property, then the largest item is stored at the root node.
Swap: Swap the first element with the last element.
Remove: Remove the last element from the heap.
Heapify: Heapify the root element again so that we have the highest element at root.
Repeat this until all the items of the list are sorted.
###################################################################################################*/
const maxHeapify = (arr, n, i) => {
  let largest = i;
  let l = 2 * i + 1; //left child index
  let r = 2 * i + 2; //right child index

  //If left child is smaller than root
  if (l < n && arr[l] > arr[largest]) {
    largest = l;
  }

  // If right child is smaller than smallest so far
  if (r < n && arr[r] > arr[largest]) {
    largest = r;
  }

  // If smallest is not root
  if (largest != i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    // Recursively heapify the affected sub-tree
    maxHeapify(arr, n, largest);
  }
};

// main function to do heap sort
const heapSort = (arr, n) => {
  // Build heap (rearrange array)
  for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
    maxHeapify(arr, n, i);
  }

  // One by one extract an element from heap
  for (let i = n - 1; i >= 0; i--) {
    // Move current root to end
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // call max heapify on the reduced heap
    maxHeapify(arr, i, 0);
  }
};
// Input:
const arr = [4, 6, 3, 2, 9];
heapSort(arr, arr.length);
console.log(arr);

//Output:
[2, 3, 4, 6, 9];
// Time complexity O(nlogn)
//space complexity O(1);
/*
#############################Sort in descending order using Heap sort and Min-heap ######################
const minHeapify = (arr, n, i) => {
  let smallest = i;
  let l = 2 * i + 1; //left child index
  let r = 2 * i + 2; //right child index
  
  //If left child is smaller than root
   if (l < n && arr[l] < arr[smallest]) {
            smallest = l; 
   }
  
   // If right child is smaller than smallest so far 
   if (r < n && arr[r] < arr[smallest]) {
        smallest = r; 
   }
  
   // If smallest is not root 
   if (smallest != i) { 
        let temp = arr[i]; 
        arr[i] = arr[smallest]; 
        arr[smallest] = temp; 
  
      // Recursively heapify the affected sub-tree 
      minHeapify(arr, n, smallest); 
    } 
}

 // main function to do heap sort 
 const heapSort = (arr, n) => { 
     // Build heap (rearrange array) 
     for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
         minHeapify(arr, n, i); 
     }
  
     // One by one extract an element from heap 
     for (let i = n - 1; i >= 0; i--) { 
        // Move current root to end 
        let temp = arr[0]; 
        arr[0] = arr[i]; 
        arr[i] = temp; 
  
        // call max heapify on the reduced heap 
        minHeapify(arr, i, 0); 
     } 
 } */
