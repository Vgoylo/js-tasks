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
