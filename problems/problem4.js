/*
Problem: you are given a list of numbers in a "short hand" range where only
  the significan part of the next number is written as the numbers are always
  increasing. Write a function that takes a short-hand range and returns a list
  of complete numbers.

  - When there are commas, the next number is the next highest number that ends
    in that digit
  - When there are `-`, `:`, `..`, you list every number that ends with the
    digits in that range

Input: a string of numbers, seperated by , - : ..
Output: a range of comma separated numbers

Data:
  - the string is first split by commas, assigned to variable commaRange
  - all subranges divided by - : or .. will be process by an additional function
  - the final array (finalRange) will be joined into a string and returned

Algorithm (function name expand, with parameter string)
  - Split `string` by commas and assign to array commaRange
  - Initialize empty array finalRange
  - Iterate over commaRange
    - If the current element is a subrange, call the function subrangeProcess,
      passing in current element and finalRange
    - If the current element is not, call the function nextProcess, passing in
      current element and finalRange
  - Join finalRange by commas and return

Algorithm nextProcess (with parameters currentNum and finalRange)
  - initialize variable lastNum, equal to the final element of finalRange
  - create a while loop, adding 1 to lastNum, until it converted into a string,
    has the same last character as currentNum
  - add current value of lastNum to finalRange


Algorithm subrangeProcess (with parameters currentRange and finalRange)
  - reassign currentRange to itselt split by -, .., or :
  - initialize array toProcess, with one element, element 0 or currentRange converted to num
  - starting at element 1, add every num from 1 + previous element until equal to current element
  - iterate over toProcess, calling each num to nextProcess
*/

function expand(string) {
  let commaRange = string.split(', ');
  let finalRange = [];
  commaRange.forEach((element, index) => {
    if (element.match(/(-|\.\.|:)/)) {
      subrangeProcess(element, finalRange);
    } else {
      nextProcess(element, finalRange);
    }
  });

  return finalRange.join(', ');
}

function nextProcess(currentNum, finalRange) {
  if (finalRange.length === 0) return finalRange.push(Number(currentNum));

  let lastNum = finalRange[finalRange.length - 1];
  if (currentNum.length > 1) {
    while (String(lastNum).slice(-(currentNum.length)) != currentNum) {
      lastNum += 1;
    }
  } else {
    while (String(lastNum).slice(-1) != currentNum) {
    lastNum += 1;
  }
 };

  finalRange.push(lastNum);
}

function subrangeProcess(currentRange, finalRange) {
  currentRange = currentRange.split(/[-:]|\.\./g).map(num => parseInt(num, 10))
  let toProcess = [currentRange[0]];
  for (let index = 1; index < currentRange.length; ++index) {
    let lastNum = currentRange[index - 1];
    let currentNum = currentRange[index];

    for (let nextNum = lastNum + 1; nextNum <= currentNum; ++nextNum) {
      toProcess.push(nextNum);
    }


  }
  toProcess.forEach(num => nextProcess(num, finalRange));
}

console.log(expand("1, 3, 7, 2, 4, 1")) // 1, 3, 7, 12, 14, 21
console.log(expand("1, 02")); // 1, 102
console.log(expand("1-3, 1-2")) // 1, 2, 3, 11, 12
console.log(expand("1..3, 1..2")) // 1, 2, 3, 11, 12
/*
console.log(expand("1:5:2")) // 1, 2, 3, 4, 5, 6, ... 12
console.log(expand("104-2")) // 104, 105, ... 112
console.log(expand("104-02")) // 104, 105, ... 202
console.log(expand("545, 64:11")) // 545, 564, 565, .. 611
*/