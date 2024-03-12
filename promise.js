/*
 Task 1 create function for get user name by index with Promise and .then
*/
let Users = [
  {
    name: "vitali",
    age: 32,
    address: {
      street: "semashko",
      numberBuild: 15,
      floo: 23,
    },
    email: "vg@mail.com",
  },
  {
    name: "alesy",
    age: 32,
    address: {
      street: "Nemiga",
      numberBuild: 156,
      floo: 13,
    },
    email: "ag@mail.com",
  },
  {
    name: "matvey",
    age: 5,
    address: {
      street: "Derginckogo",
      numberBuild: 115,
      floo: 12,
    },
    email: "mg@mail.com",
  },
];

function getUserName(num) {
  // return Promise.resolve(Users[num]);

  const promise = new Promise((resolve, rejected) => {
    setTimeout(() => {
      try {
        resolve(Users[num]);
      } catch (error) {
        rejected(error);
      }
    }, 2000);
  });
  return promise;
}

const user1 = getUserName(1)
  .then((user) => user.address)
  .then((address) => address.street)
  .then((street) => street);

const user2 = getUserName(2)
  .then((user) => user.address)
  .then((address) => address.street)
  .then((street) => street);

Promise.all([user1, user2]).then(
  (result) => console.log(result), // showed the result after two seconds
  (error) => console.warn(error) // isn't starting
);

console.log(Users);
