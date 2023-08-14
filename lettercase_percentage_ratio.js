/*
Problem: Write a function that takes a string and returns an object containing
the following three properties:
    the percentage of characters in the string that are lowercase letters
    the percentage of characters that are uppercase letters
    the percentage of characters that are neither
- You may assume that the string will always contain at least one character.

Data: use regex on the string 3 times, so you have seperate strings of upper,
  lower, and non-alphabetic characters. Then calculate by comparing lengths.

Input: string
Output: hash

Algorithm:
  - initialize three seperate strings, uppperCase, lowerCase, and neither
    to the respective letters of `string` using regex and the string replace
    method
  - initialize empty hash `lengths``
  - to `lengths`, add all three string variables divided by the length of the
    string, and rounded to the 2nd decimal
  - return `lengths`
*/

function letterPercentages(string) {
  let upperCase = string.replace(/[^A-Z]/g, '');
  let lowerCase = string.replace(/[^a-z]/g, '');
  let neither = string.replace(/[A-Z]/gi, '');
  let lengths = {};

  lengths['lowercase'] = (lowerCase.length / string.length * 100).toFixed(2);
  lengths['uppercase'] = (upperCase.length / string.length * 100).toFixed(2);
  lengths['neither'] = (neither.length / string.length * 100).toFixed(2);

  return lengths;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }