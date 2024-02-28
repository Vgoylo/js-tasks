/**
 * Task 1
 * Please make you own "Stack" data structure (check https://www.youtube.com/watch?v=KcT3aVgrrpU)
 * Please use functions-constructors to do that
 * See example usage below
 */

function Stack() {
  this.obj = [];
  // this.size = size;

  Stack.prototype.push = function (num) {
    this.obj.push(num);
    // console.log(this.obj);
    return "";
  };

  Stack.prototype.pop = function (num) {
    return this.obj.pop(num);
  };

  Stack.prototype.log = function () {
    return this.obj.toString();
  };

  Stack.prototype.size = function () {
    return this.obj.length;
  };
}

let numbersStack = new Stack();

console.log("numbersStack.push(1), returns nothing => ", numbersStack.push(1)); // adds 1, returns nothing
console.log("numbersStack.push(2), returns nothing => ", numbersStack.push(2)); // adds 2, returns nothing
console.log("numbersStack.push(3), returns nothing => ", numbersStack.push(3)); // adds 3, returns nothing
console.log("numbersStack.size returns 3 => ", numbersStack.size()); // returns 3
console.log("return logs 1, 2, 3 to console => ", numbersStack.log()); // logs 1, 2, 3 to console
console.log("removes 3 from stack and returns it => ", numbersStack.pop()); // removes 3 from stack and returns it
console.log("numbersStack.size returns 2 => ", numbersStack.size); // returns 2
console.log("removes 2 from stack and returns it => ", numbersStack.pop()); // removes 2 from stack and returns it
console.log("numbersStack.size returns 1 => ", numbersStack.size); // returns 1
console.log("numbersStack.push(4), returns nothing => ", numbersStack.push(4)); // adds 4, returns nothing
console.log("return logs 1, 4 to console", numbersStack.log()); // logs 1, 4 to console
