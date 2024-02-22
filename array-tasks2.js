      /**
      * Task 1
      * Создать новый массив с именами пользователей, у которых возраст меньше 18.
      * Для решения задачи используем цикл for..of и метод push.
      */

      const users = [
        { name: 'Alex', age: 31 },
        { name: 'Olga', age: 17 },
        { name: 'Carl', age: 15 },
        { name: 'Nancy', age: 28 },
        { name: 'Eric', age: 9 }
      ]

      function tinager() {
        // TODO: possible solution:
        let result = users.filter(user => user.age > 18)

        return result.map(user => user.name);
      }

      console.log('Task 1', tinager())

      /**
      * Task 2
      * Создайте два массива, в один поместите все положительные числа включая 0,
      * в другой все отрицательные. Оба массива затем выведите в консоль.
      */

      const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4]

      function atherArr() {
        let positiveArr = [];
        let negativeArr = [];

        for (let item of mixedNumbers) {
          // TODO: ternary operator :
          item < 0 ? negativeArr.push(item) : positiveArr.push(item)
        }
        result = {
          0: negativeArr,
          1: positiveArr
        };
        return (Array.prototype.join.call(result))
      }
      console.log('Task 2  => ', atherArr())

      /**
      * Task 3
      * - Соедините два массива чисел в один.
      * - В полученном массиве попробуйте найти индекс числа `9`
      */
      const evenNumbers = [2, 4, 6, 8, 10]
      const oddNumbers = [1, 3, 5, 7, 9]

      function concatFindIndex(arr1, arr2) {
        let arr = arr1.concat(arr2)
        // let findIndex = arr.findIndex(item => item == 9)
        // TODO: with indexOf():
        return arr.indexOf(5);
      }

      console.log('Task 3  => ', concatFindIndex(evenNumbers, oddNumbers))

      /**
      * Task 4
      *  Наш бинарный массив неполный, в нем явно не хватает единиц.
      * Превратите данный массив в строку.
      *`[0, 0, 0, 0]` -> `'0101010'`В полученном массиве попробуйте найти индекс числа `9`
      */

      const binary = [0, 0, 0, 0]

      function createBinary(arr) {
        let string = String(arr)
        // let binary = string.split(',').join('1')
        // TODO: return binary.join('1')

        return binary.join('1');

      }
      console.log('Task 4 => ',createBinary(binary))
