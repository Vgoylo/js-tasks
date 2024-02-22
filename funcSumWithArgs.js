/**
* Task 1
* Write function "sum" for which next results should be true
*/

function sum(arg) {
  function iner(arg1) {
    let sum = arg + arg1
    return sum
  };
  return iner;
}

console.log('Task 1 => ', sum(3)(5) === 8); // true
console.log('Task 1 => ', sum(2)(7) === 9); // true
console.log('Task 1 => ', sum(1)(5) === 6); // true
