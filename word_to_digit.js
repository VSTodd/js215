/*
- Write a function that takes a sentence string as an argument and returns that
  string with every occurrence of a "number word" — 'zero', 'one', 'two',
  'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its
  corresponding digit character.

- Input: string
- Output: string, with written out numbers represented as digit numbers

- Data: have an object with written numbers as keys, digit numbers as values

Algorithm:
- declare constant NUMBERS, with written numbers as keys, digit values as values
- declare variable words, which is string split by spaces
- iterate over words array
  - if a word is a key of NUMBERS, replace that key's value in the array
- return the joined version of words
*/

function wordToDigit(string) {
  const NUMBERS = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
    'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'zero': 0};
  let words = string.split(' ');

  words = words.map(word => {
    if (NUMBERS[word]) {
      return NUMBERS[word]
    } else if (NUMBERS[word.replace(/[^a-z]/gi, '')]) {
      return String(NUMBERS[word.replace(/[^a-z]/gi, '')]) + word[word.length - 1];
    } else {
      return word;
    }
    });
  return words.join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));;
// "Please call me at 5 5 5 1 2 3 4. Thanks."