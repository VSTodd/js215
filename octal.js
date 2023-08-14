/*
- Write a Function named octalToDecimal that performs octal to decimal
  conversion
- When invoked on a String that contains the representation of an octal number,
  the Function returns a decimal version of that value as a Number
- Implement the conversion yourself: do not use something else to perform the
  conversion for you.

  233                          // octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8   + 3*1
= 128   + 24    + 3
= 155                          // decimal

Abstraction:
  - Modify string into an array of each digit (split)
  - Modify array from strings into digits (map)
  - Modify array to each digit * 8 ^ array.length - 1 - index (map)
  - Calculate the sum of the array (reduce)
*/

function octalToDecimal(numberString) {
  let array = numberString.split('').map(digit => Number(digit));
  array = array.map((digit, index) => {
    let power = array.length - 1 - index;
    return digit * Math.pow(8, power)
  });
  return array.reduce((previous, value) => previous + value);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9