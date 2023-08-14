/*
Write a function that computes the difference between the square of the sum of
the first n positive integers and the sum of the squares of the first n positive
integers.

Data:
  - have two seperate functions, calculating the sumSquare and sumOfSquares,
    then simply take the difference
- Input: number
- Output: number

Algorithm sumSquareDifference:
- Initialize variable sumSquare, set to function calcSumSquare on num
- Initialize variable sumOfSquares, set to function calcSumOfSquares on num
- Return the difference of sumSquare and sumOfSquares

Algorithm calcSumSquare:
- initialize variable sum, equal to zero
- utilizing for loop, add every number from 1 to num to sum
- return that square of sum

Algorithm calcSumOfSquares:
- initialize variable squareSum
- utilizing a for loop, add the squared version of every number from 1 to num
  to sum
- return squareSum
*/

function sumSquareDifference(num) {
  return calcSumSquare(num) - calcSumOfSquares(num);
}

function calcSumSquare(num) {
  let sum = 0
  for (let counter = 1; counter <= num; ++counter) {
    sum += counter
  }
  return sum**2
}

function calcSumOfSquares(num) {
  let sumSquare = 0
  for (let counter = 1; counter <= num; ++counter) {
    sumSquare += counter**2
  }
  return sumSquare;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2) -> 36 - 14
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150