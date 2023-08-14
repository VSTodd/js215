/*
Problem:
- Write a function that takes a year as an argument and returns the number of
  'Friday the 13ths' in that year.
- You may assume that the year is greater than 1752 (when the modern Gregorian
  Calendar was adopted by the United Kingdom)
- You may also assume that the same calendar will remain in use for the
  foreseeable future.

Data:
- Iterate over each 13th day of each month in given year, adding one to final
  count if the day lands on a Friday
Input: Number representing year
Output: Number representing friday the 13ths

Algorithm:
- initialize variable `unlucky` set to zero
- create a for loop with month variable set to 1, and going until month is over 12
  - create a new date object witht the given month and year, on the 13th
  - if the day of the week of the new date object is Friday, add 1 to unlucky
- Return unlucky
*/

function fridayThe13ths(year) {
  let unlucky = 0;
  for (let month = 1; month <= 12; ++month) {
    let date = new Date(`${year}-${month}-13`);
    if (date.getDay() === 5) unlucky += 1
  }
  return unlucky;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2