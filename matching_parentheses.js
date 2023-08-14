/*
- Write a function that takes a string as an argument and returns true if the
  string contains properly balanced parentheses, false otherwise.
- Parentheses are properly balanced only when '(' and ')' occur in matching
  pairs, with each pair starting with '('.

- initialize two variables, open and close, set to zero
- Iterate over every character in the string (for loop)
  - if the character is an open parenthesis, add one to open
  - if its a close parenthesis, add one to close
  - if close is ever larger than open, return false
- if open and close are not equal, return false, otherwise return true
*/

function isBalanced(string) {
  let open = close = 0;
  for (let index = 0; index < string.length; ++index) {
    if (string[index] === '(') {
      open += 1
    } else if (string[index] === ')') {
      close += 1
    }

    if (close > open) return false
  }

  return open === close;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false