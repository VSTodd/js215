/*
Problem: Write a function that takes an array as an argument and sorts that
array using the bubble sort algorithm. The sorting should be done "in-place" —
that is, the function should mutate the array.

You may assume that the array contains at least two elements.
Data:
  - Input: array
  - Output: the same array
  - Use the same array throughout, swapping the adjacent values as needed
    - Loop through an iteration of the array until no changes are made


Algorithm:
- utilize a for loop, initializing the value 'sort' to true, and reassigning
  sort to true with every iteration
    - utilize another for loop, iterating over every element from the first to
      the second to last element
      - initialize variable `first` to the element at the current index
      - initialize variable `second` to the element at the next index
      - if first is greater than second
        - reassign sort to false
        - set the current index to second and the next index to first
    - break the loop if sort is true
- return array

*/

function bubbleSort(array) {
  for (let sort = true; ; sort = true) {
    for (let index = 0; index < array.length - 1; ++index) {
      let first = array[index];
      let second = array[index + 1];
      if (first > second) {
        sort = false;
        array[index] = second;
        array[index + 1] = first;
      }
    }
    if (sort) break;
  }
  return array
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]