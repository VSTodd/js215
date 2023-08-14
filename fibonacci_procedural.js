/*
Problem: calculate fibonacci, without using recursion


*/

function fibonacci(num) {
  let first = 1;
  let second = 1;
  let counter = 2;

  for (let counter = 2; counter < num; ++counter) {
    let nextNum = first + second;
    first = second;
    second = nextNum;
  }
  return second;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050