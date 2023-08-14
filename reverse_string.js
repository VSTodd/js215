/*
Implement a function that takes a string as an argument and returns a new string
that contains the original string in reverse.

Abstraction:
  - Split the string into an array
  - Reverse the array
  - Rejoin into a string (which you return)
*/

function reverse(string) {
  return string.split('').reverse().join('');
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"