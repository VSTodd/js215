/*
Problem: Check if a number is valid according to the Luhn formula

Validate the number by:
  - counting from rightmost number and moving left, doubling the value of every
    second digit
    - If that resulting digit is 10 or more, substract it by 9
    - 1111 becomes 2121, 8763 becomes 7733
  - Add the resulting digits together
    - 1111 becomes 2121 becomes 6
    - 8763 becomes 7733 becomes 20
  - if that total ends in 0/ is evenly divisible by 10, the number is valie
    - otherwise, it is invalid

- Input: string of numbers
- Output boolean

- Function checksum, with parameter (stringNum)
- Remove all non-numeric characters from stringNum
  - utilize string.replace() method with regex
- doubling every second digit in the number, starting from the left
  - initialize variable digits to split stringNum, reversed with map iteration
    - if index is even, return as is
    - if index is odd, double it...if result is greater than 10, return it
    subtracted by 9
- initialize variable total, set to sum of stringNum digits
  - utilize reduce
- checking is total m is equal to zero
  - return the modulo of total % 10
*/


function checksum(stringNum) {
  stringNum = stringNum.replace(/[^0-9]/g, '');
  if (stringNum === '') return false;
  let digits = stringNum.split('').reverse().map((digit, index) => {
    if (index % 2 === 0) {
      return parseInt(digit, 10);
    } else {
      digit = parseInt(digit, 10) * 2;
      if (digit >= 10) digit -= 9;
      return digit
    }
  });

  let total = digits.reduce((prev, current) => prev + current);

  return total % 10 === 0;
}

console.log(checksum('1111'));                // false
console.log(checksum('8763'));                // true
console.log(checksum(''));                    //false
console.log(checksum('2323 2005 7766 3554'))  // true
console.log(checksum('a1k1kkfd1fd1'))         // false
//4343 4005 5736 6514
// 14 9 21 16
// 60 => valid!