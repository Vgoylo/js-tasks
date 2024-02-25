 /**
         * Task 1
         * Sort a given array by the next rule:
         * at the start should be numbers sorted from smallest to biggest (ascending order)
         * then should strings go alphabetically in descending order
         * example: ['str', 10, 4, 20, 'aaa', 'aab'] -> [4, 10, 20, 'str', 'aab', 'aaa']
         *
         * IMPORTANT: the function should only sort, but not change the given array!!!
         * IMPORTANT: use the single 'sort' call, split of the array or reverse is not allowed!!!
         */
 const mixedArray = ['str', 10, 4, 20, 101, 'aaa', 'aab'];

 const sortNumsAndStrings = (arr) => {
     // write your code here
     Array.prototype.mySort = function () {
         let arrNumber = [];
         let arrString = [];

         for (let row of arr) {
             if (typeof (row) === 'number') {
                 arrNumber.push(row)
             } else if (typeof (row) === 'string') {
                 arrString.push(row)
             } else {
                 false
             }
         }

         function compareNumbers(a, b) {
             return a - b;
         }
         return arrNumber.sort(compareNumbers).concat(arrString.sort().reverse())

     }

     return arr.mySort()
 }
 console.log('Task 1', (sortNumsAndStrings(mixedArray)),'array on input', (mixedArray)); // should be [4, 10, 20, 'str', 'aab', 'aaa']
 console.log('array on input', mixedArray); // should stay the same ['str', 10, 4, 20, 'aaa', 'aab']

 /**
  * Task 2
  * Given a list of people
  * Write a function which collects all last names into array
  * And calculates an average age
  *
  * CONDITIONS:
  * The task should be solved using 'reduce' method
  * The function should have only single usage of 'reduce'
  * The function should return the object: { lastNames: string[], averageAge: number }
  * Do not create the object outside reduce, please check syntax of this method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#syntax
  */
 const people = [
     {
         name: 'Dan Abramov',
         age: 40,
     },
     {
         name: 'John Snow',
         age: 30,
     },
     {
         name: 'Tatsiana Karpesh',
         age: 20,
     },
     {
         name: 'Peter Parker',
         age: 10,
     }
 ];
 const getPeopleInfo = (people) => {
     // write your code here

     let map = new Map;
     let names = [];
     let age = [];

     for (let item of people) {
         age.push(item.age)
         names.push(item.name.split(' ').at(-1))
     }

     for (let item of people) {
         age.push(item.age)
     }

     function reducer(accumulator, currentValue) {
         let averageAge = (accumulator + currentValue);
         return averageAge;
     }

     // let sum = people.reduce(
     //     (accumulator, currentValue) => accumulator + currentValue.age,
     //     0,
     // );
     // console.log(sum)

     let averAge = age.reduce(reducer) / age.length

     map.set('lastName', String(names)).set('averageAge', averAge)

     let object = Object.fromEntries(map.entries())

     return object

 }
 console.log('Task 2', getPeopleInfo(people)); // { lastNames: ['Abramov', 'Snow', 'Karpesh', 'Parker'], averageAge: 25 }


 /**
  * Task 3
  * Given an array of numbers
  * 1) Check if all numbers inside are greater than given number
  * 2) Check if there is any number greater than given number
  * 3) Return new array where each number is multiplied by given number
  * 4) Return index of given number
  * 5) Log each number into console
  * 6) Find first number which is greater that given number
  */
 const nums = [10, -10, 20, 15, 7, 17, 19, 101];
 // 1
 const everyIsGreaterThan = (nums, target) => {
     // write your code here
     let result = nums.filter((item) => item > target)
     return result.length < 0 ? true : false
 };
 // 2
 const someIsGreaterThan = (nums, target) => {
     let isExist = nums.some(num => {
         return num > target
     })
     return isExist
 };
 // 3
 const multiplyArray = (nums, multiplier) => {
     // write your code here
     let result = [];

     for (let num of nums) {
         result.push(num * multiplier)
     }
     return result
 };
 // 4
 const findIndex = (nums, target) => {
     // write your code here
     return nums.findIndex((item) => item == target)
 };
 // 5
 const logArray = (nums) => {
     // write your code here
     return nums.map((item) => console.log(item))
 };
 // 6
 const findFirstGreaterThan = (nums, target) => {
     // write your code here
     for (let num of nums) {
         if (num > target) return num
     }
 };
 console.log('Task 3/1', everyIsGreaterThan(nums, 0)); // false
 console.log('Task 3/2', someIsGreaterThan(nums, 100)); // true
 console.log('Task 3/3', multiplyArray(nums, 10)); // [100, -100, 200, 150, 70, 170, 190, 1010]
 console.log('Task 3/4', findIndex(nums, 17)); // 5
 console.log('Task 3/5', (nums)); // just logs
 console.log('Task 3/6', findFirstGreaterThan(nums, 10)); // 20
