/*
Problem: Write a function that takes the lengths of the three sides of a
         triangle as arguments and returns one of the following four strings
         representing the triangle's classification: 'equilateral', 'isosceles',
         'scalene', or 'invalid'.
    Equilateral: All three sides are of equal length.
    Isosceles: Two sides are of equal length, while the third is different.
    Scalene: All three sides are of different lengths.
    Invalid: The sum of the lengths of the two shortest sides are less than or
            equal to the length of the longest side or one or more sides have a
            length of 0

Data: utilize a conditional, to process/return the name of every type of
  triangle

Input: 3 numbers
Output: string

Algorithm:
- reassign sort1, sort2, and sort3 to the respective values in ascending order
  - put the three sorts in an array which is sorted into the proper order
- using a conditional, test if:
  - the triangle is invalid
    - if any side is 0 return invalid
    - if side1 + side2 is less than or equal to side3, return invalid
  - the triangle is equilateral
    - if all sides are equal, return equilateral
  - if the triangle is scalene
    - if all sides are not equal, return scalene
  - otherwise, return isoceles
*/

function triangle(side1, side2, side3) {
  let sortedSides = [side1, side2, side3].sort((a, b) => a - b);
  side1 = sortedSides[0];
  side2 = sortedSides[1];
  side3 = sortedSides[2];

  if (side1 === 0 || side2 === 0 || side3 === 0) {
    return 'invalid';
  } else if ((side1 + side2) <= side3) {
    return 'invalid';
  } else if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
    return 'scalene';
  } else {
    return 'isosceles';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"