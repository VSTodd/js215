/*
Problem: Implement encoding and decoding for the rail fence cipher.

The below states: WE ARE DISCOVERED FLEE AT ONCE
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .

Decoder:
- Divide three lines into three arrays, to better manage the data
- Read in the order of (line 1, line 2, line 3, line 2) and start over

Input: three line string
Output: one line string

Algorithm (function decoder, with parameter cipher)
- Split cipher by newline, assigning to arrays line1, line2, line3
- Initialize empty sting decoded
- iterate over each char in line1, including index
  - for each line at the current index, add to decoded if char isn't a .
- Return chars

Encoder:
  - divide string into three lists, with every odd index going to list2, and the
    evens alternating from list1 and list3 (belongs in list 1 if evenly divided by 4)
  - return the three lines divided by newlines
Data: work solely with strings

Algorithm (function encoder, with parameter message)
- reassign message to message with spaces removed, split by char
- initialize three empty strings, list1, list2, list3
- iterate over each char in message, including index
  - utilize a conditional
    - if the index is evenly difvided by four, add current char to line1
      and a . to line2 and 3
    - if the index is odd, add current char to line2 (plus . to the other lines)
    - otherwise, add current char to line3, with . to the other lines
- return a string of line1 + newline + line2 + newline + line3
*/

function encoder(message) {
  message = message.replaceAll(' ', '').split('');
  let list1 = list2 = list3 = '';
  message.forEach((char, index) => {
    if (index % 4 === 0) {
      list1 += char;
      list2 += '.';
      list3 += '.';
    } else if (index % 2 !== 0) {
      list1 += '.';
      list2 += char;
      list3 += '.';
    } else {
      list1 += '.';
      list2 += '.';
      list3 += char;
    }
  });
  return list1.split('').join(' ') + '\n' + list2.split('').join(' ') + '\n' + list3.split('').join(' ');
}

function decoder(cipher) {
  let line1, line2, line3;
  [line1, line2, line3] = cipher.split(/\n/).map(line => line.split(' '));
  let decoded = '';
  line1.forEach((lineOneChar, index) => {
    if (lineOneChar !== '.') {
      decoded += lineOneChar;
    } else if (line2[index] !== '.') {
      decoded += line2[index];
    } else if (line3[index] !== '.') {
      decoded += line3[index];
    }
  });
  return decoded;
}

let encodedMessage = 'W . . . E . . . C . . . R . . . L . . . T . . . E\n' +
                     '. E . R . D . S . O . E . E . F . E . A . O . C .\n' +
                     '. . A . . . I . . . V . . . D . . . E . . . N . .'

let decodedMessage = 'WE ARE DISCOVERED FLEE AT ONCE'

console.log(decoder(encodedMessage)); // WEAREDISCOVEREDFLEEATONCE
console.log(encoder(decodedMessage)); //
