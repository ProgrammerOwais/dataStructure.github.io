// How to insert an element in an array ;
function insertElement(array, val, idx) {
  let size = array.length;
  // console.log("Array before insertion : ", array);
  for (let i = size - 1; i >= idx - 1; i--) {
    array[i + 1] = array[i];
  }
  array[idx] = val;
  // console.log("Array after insertion : ");
  // for (let i = 0; i <= size; i++) {
  //   console.log(array[i]);
  // }
  return array;
}

let array = [1, 2, 3, 5];
console.log(insertElement(array, 4, 0));
