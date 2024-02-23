// Task 1

function recurs(x, n) {
  return (n == 1) ? x : (x * recurs(x, n - 1))
}

// Task 2

function factorial(n) {
  return (n != 1) ? n : n * factorial(n - 1)
}

// Task 3
function sumTo(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i
  }

  return sum
}

console.log('Task 1 => ', recurs(2, 4))
console.log('Task 2 => ', factorial(7))
console.log('Task 3 => ', sumTo(8))
