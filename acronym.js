/*
- Write a function that generates and returns an acronym from a string of words.
  - For example, the function should return "PNG" for the string "Portable
    Network Graphics"
- Count compound words (words connected with a dash) as separate words.

Abstraction
  - Split string by space OR dash
  - Reduce array into string of just the first letters capitalized
  - Return reduced array
*/

function acronym(string) {
  let words = string.split(/[- ]/g);
  return words.reduce(
    (previous, current) => previous + current[0].toUpperCase(),
    ''
  );
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"

