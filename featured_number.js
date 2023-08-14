/*
Problem:
Write a function that takes an integer as an argument and returns the next
featured number greater than the integer. Issue an error message if there is no
next featured number.

A featured number is:
  - An odd number
  - A multiple of 7
  - Has all of its digits occurring exactly once each

Data:
  - add 1 to given number until you find one that is both a multiple of 7
    and odd
  - then break down said number into an array of single digit strings, and see
    if each number is unique (see if the first index of digit is the same at the
    last index of digit)
Input: integer
Output: integer or string

Algorithm:
  - If the number is greater than or equal to 9876543201, return
    'There is no possible number that fulfills those requirements.'
  - Create a for loop, adding 1 to num with every iteration
    - if the number is -NOT- evenly divisible by 2 but is evenly divisible
      by 7, call uniqueDigits on num
        - if that returns true, break
  - Return num

uniqueDigits algorithm:
  - initialize variable digits, equal to a string version of num split by char
  - iterate over digits using a for loop
    - return false is the first index of a digit in digits is not the same as the
      last index of digit in digits
*/

function featured(num) {
  if (num >= 9876543201) {
    return 'There is no possible number that fulfills those requirements.'
  }

  for (num = num + 1; ; ++num) {
    if (num % 2 !== 0 && num % 7 === 0) {
      if (uniqueDigits(num)) return num;
    }
  }
}

function uniqueDigits(num) {
  let digits = String(num).split('');
  for (let index = 0; index < digits.length; ++index) {
    if (digits.indexOf(digits[index]) !== digits.lastIndexOf(digits[index])) {
      return false
    }
  }
  return true
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."