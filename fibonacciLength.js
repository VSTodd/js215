/*
Problem:
Write a function that calculates and returns the index of the first
  Fibonacci number that has the number of digits specified by the argument.
  (The first Fibonacci number has an index of 1.)
You may assume that the argument is always an integer greater than or equal to 2.

- Input: (big) integer
- Output: integer, representing how many cycles until number with specified
    digits found

Data: store all numbers in an array, return length of array

Algorithm:
- initialize array `fibonacci`, set to an array of two ones
- create a loop adding together the last two numbers of the `fibonacci` array
  to `fibonacci`
  - break the loop when the length of the num of the last index (converted to string)
    is equal to num
- return the length of fibonacci
*/

function findFibonacciIndexByLength(num) {
  let first = 1n;
  let second = 1n
  let length = 1n;
  let counter = 2n

  while (length !== num) {
    let nextNum = first + second;
    first = second;
    second = nextNum;
    counter += 1n;
    length = BigInt(String(second).length)
  }
  return counter;
}
console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);
// The last example may take a minute or so to run.