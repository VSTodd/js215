/*
- Problem:
Write a function that takes a word string as an argument, and returns true if
the word can be spelled using the set of blocks, or false otherwise

- Below is the collection of blocks; true is only returned if you do not use
  letters from both blocks AND you oly use each block once
- The rules are case insensitive

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

Input: string
Output: boolean

Data:
- string will be divided into an array of single letter strings
- blocks will be stored in two arrays, with the two letters of the same block,
  having the same index

Algorithm:
  - initialize two array constants, block1, block 2, one with all the left
    blocks and one with the right blocks
  - initialze array chars, equal to string in upcase, split by character
  - using a for loop, iterate over all the characters in char
    - declare variable blockIndex
    - if the current letter is present in block1, assign blockIndex to it's index
      in block1
    - if the current letter is present in block2, assign blockIndex to it's index
      in block2
    - if blockIndex is still undefined, return false
    - delete in block1 and block2 the current index
  - return true
*/
function isBlockWord(string) {
  const BLOCK1 = ['B', 'G', 'V', 'X', 'R', 'L', 'D', 'F', 'Z', 'C', 'J', 'N', 'H'];
  const BLOCK2 = ['O', 'T', 'I', 'K', 'E', 'Y', 'Q', 'S', 'M', 'P', 'W', 'A', 'U'];
  let chars = string.toUpperCase().split('');

  for(let index = 0; index < chars.length; index++) {
    let blockIndex;
    if (BLOCK1.includes(chars[index])) {
      blockIndex = BLOCK1.indexOf(chars[index]);
    } else if (BLOCK2.includes(chars[index])) {
      blockIndex = BLOCK2.indexOf(chars[index]);
    } else {
      return false;
    }

    BLOCK1.splice(blockIndex, 1);
    BLOCK2.splice(blockIndex, 1);
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord(''));           // true
console.log(isBlockWord('bAtch'));      // true