/*
 Task 1 create function for get user name by index with Promise and .then
*/
let Users = [
  {
    name: "vitali",
    age: 32,
  },
  {
    name: "alesy",
    age: 32,
  },
  {
    name: "matvey",
    age: 5,
  },
];

function getUserName(num) {
  return Promise.resolve(Users[num]);
}

getUserName(1)
  .then((user) => user.name)
  .then((name) => console.log(name));
