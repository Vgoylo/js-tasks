 /**
 * Task 6
 * Add method "capitalize" to strings which should work as described below
 */

 String.prototype.capitalize = function () {
  console.log(this)
  let str = this.toLocaleLowerCase().split(' ')
  let result = [];

  for (let row of str) {
      // result.push(row.at(0).toUpperCase() + row.slice(1))
      result.push(row.replace(/^./, row.at(0).toUpperCase()))
  }

  return console.log(result.join(' '))
}

console.log("hello world".capitalize() === "Hello World");
console.log("OH MY".capitalize() === "Oh My")
