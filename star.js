/*
Problem: Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

- n is both the number of character wide each line is and the number of lines that are output
- each line except the middle most line contains 3 stars
- for the top half:
- the spaces between each star is n minus 3 / 2, with the prepending spaces equaling 0
  - with each iteration, the between spaces are subtracted by 1, whereas prepending spaces inc by 1
  - iteration stops after the inbetween spaces are 0
- the middle line contains n number of stars
- for the bottom half:
  - spaces between each star are 0, the spaces prepending are n - 3 / 2
  - with each iteration, the between spaces are added by 1, whereas the prepending spaces are subtracted by 1

algorithm star(n):
  - call topHalf with n
  - log star repeated by n
  - call bottomHalf with n

algorithm spacesAndStars(pre, between):
  - initialize empty string `line`
  - add space repeated by pre + star to line
  - add space repeated by between + star to line
  - add space repeated by between + star to line

algorithm topHalf(n):
- use a for loop, initializing pre to 0 and between to n - 3 / 2, ending when between is less than 0
  - after each loop, add 1 to pre, subtract 1 from between
  - log to the console calling spacesAndStars with pre and between

algorithm bottomHalf(n):
- use a for loop, initializing pre to n - 3 / 2 and between to 0, ending when pre is less than 0
  - after each loop, subtract 1 from pre, add 1 to between
  - log to the console calling spacesAndStars with pre and between
*/

function star(n) {
  topHalf(n);
  console.log('*'.repeat(n));
  bottomHalf(n);
}

function spacesAndStars(pre, between) {
  let line = '';
  line += (' '.repeat(pre) + '*');
  line += (' '.repeat(between) + '*').repeat(2);
  return line;
}

function topHalf(n) {
  for (let pre = 0, between = (n - 3) / 2; between >= 0; ++pre, --between) {
    console.log(spacesAndStars(pre, between));
  }
}

function bottomHalf(n) {
  for (let pre = (n - 3) / 2, between = 0; pre >= 0; --pre, ++between) {
    console.log(spacesAndStars(pre, between));
  }
}
star(7);

console.log(' ');

star(9);