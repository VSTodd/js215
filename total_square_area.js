/*
- Write a Function named totalArea that takes an Array of rectangles as an
  argument
- The Function should return the total area covered by all the rectangles.

- Abstractions:
    - Modify all subarrays to be the area of the rectangle (map)
    - Calculate the sum of the array (reduce)


- Write a second Function named totalSquareArea
- This Function should calculate the total area of a set of rectangles, just
  like totalArea
- However, it should only include squares in its calculations: it should ignore
  rectangles that aren't square.

- Abstractions:
  - Filter only subarrays that have the same length/width
  - Call totalArea on the array
*/

function totalArea(rectangles) {
  let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
  return areas.reduce((previous, value) => previous + value);
}

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  return totalArea(squares);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141
console.log(totalSquareArea(rectangles));    // 121)