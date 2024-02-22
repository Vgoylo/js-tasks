/**
    * Task 4
    * - Написать функцию конструктор `Student`
    * - В каждом объекте студента должны быть поля `salary`, `rate`, `name`
    * - Внутри объекта также должен быть метод который на основе рейтинга
    *   возвращает сумму возможного кредита.
    * - На основе функции создать минимум 5 студентов и имя каждого студента
    *   должно соответствовать имени студента из вашей группы.
    * - Создать массив `students` и поместить в него студентов.
    * - Написать функцию, которая принимает массив студентов. И вычисляет общую сумму
    *   кредитов которую можно выдать группе.
    * `rate` имеет 4 категории **A B C D**:
    *  *A** - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
    *  *B** - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
    *  *C** - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
    *  *D** - плохой рейтинг и мы не можем дать кредит
    */
    var A = 4;
    var B = 3;
    var C = 2;
    var D = 1;

    let users = ['Vitali', 'Matvey', 'Alesya', 'Tany', 'Alex']
    let studentsGrup = [];

    function createStudent(arr) {
      function randomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }
      function User(name, salary = randomInteger(50, 200), rate = randomInteger(1, 4)) {
        this.name = name,
          this.salary = salary,
          this.rate = rate
      }

      for (let i = 0; i <= users.length - 1; i++) {
        let student = new User(users[i])
        studentsGrup.push(student)
      }
      User.prototype.calculateTotalSum = function (arr) {
        let arrStudents = [];

        arr.find((item) => {
          if (item.rate >= 2) {
            arrStudents.push(item)
          }
        });

        let amountСredit = 0;
        let studentNmaes = [];

        for (let item of arrStudents) {
          studentNmaes.push(item.name)
          if (item.rate == 2) {
            amountСredit += item.salary * C
          } else if ((item.rate == 3)) {
            amountСredit += item.salary * B
          } else if (item.rate == 4) {
            amountСredit += item.salary * A
          }
        }

        let message = `Amount to receive a loan from ${arrStudents.length} it students ( ${studentNmaes} ) is = ${amountСredit}`
        return message
      }

      let result = [];

      for (let obj of studentsGrup) {
        // console.log(obj)
        result.push(obj.calculateTotalSum(studentsGrup))
      }
      return result[0]
    }
    console.log(createStudent(users))
