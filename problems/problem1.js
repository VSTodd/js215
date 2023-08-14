/*
Write a program that cleans up user-entered phone numbers so that they can be
sent as SMS messages. Other than digits, the number may also contain special
characters such as spaces, dash, dot, and parentheses that should be ignored.

Rules
  If the phone number is less than 10 digits, assume that it is a bad number.
  If the phone number is 10 digits, assume that it is good.
  If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
  If the phone number is 11 digits and the first number is not 1, then it is a bad number.
  If the phone number is more than 11 digits, assume that it is a bad number.
For bad numbers, just return a string of 10 0s.

- Write a program that takes a number represented by a string, possibly mixed
with special characters
  - The number is good if it contains 10 digits, or it contains 11 digits with
    the first being 1
  - Otherwise it's a bad number

Input: string of uncleaned up numbers
Output: string of 10 digits if good number, otherwise string of 10 0s

Data type: work with strings throughout, single parameter will be phoneNum

Algorithm:
- Remove all non-digits from phoneNum
- Check the length of phoneNum
  - If the length is 11, with the first digit as 1, return phoneNum with the
    first digit removed
  - If the length is 10, return phoneNum as is
  - Otherwise return `0000000000`
*/

function cleanNumber(phoneNum) {
  phoneNum = phoneNum.replace(/[^0-9]/g, '');
  let length = phoneNum.length;
  if (length === 11 && phoneNum[0] === '1') {
    return phoneNum.slice(1);
  } else if (length === 10) {
    return phoneNum
  } else {
    return '0000000000'
  }
}

console.log(cleanNumber('1234567890'))    // 1234567890
console.log(cleanNumber('(123)456-7890')) // 1234567890
console.log(cleanNumber(''))              // 0000000000
console.log(cleanNumber('1(123)456-7890'))// 1234567890
console.log(cleanNumber('11234567890'))   // 1234567890
console.log(cleanNumber('91234567890'))   // 0000000000
console.log(cleanNumber('912345678900'))  // 0000000000
console.log(cleanNumber('912'))           // 0000000000
