function* generateSequence() {
  yield user();
  yield resultNum();
  yield finish();
}

let finish = () => {
  console.log("This is last yield");
};

let Users = [
  {
    name: "vitaliy",
    age: 31,
    address: {
      city: "Minsk",
      build: 145,
    },
  },

  {
    name: "sasha",
    age: 30,
    address: {
      city: "grodno",
      build: 115,
    },
  },
  {
    name: "alesya",
    age: 32,
    address: {
      city: "Minsk",
      build: 175,
    },
  },
  {
    name: "vitali",
    age: 32,
    address: {
      city: "Minsk",
      build: 15,
    },
  },
  {
    name: "matvey",
    age: 5,
    address: {
      city: "Minsk",
      build: 115,
    },
  },
  {
    name: "vitali",
    age: 32,
    address: {
      city: "Minsk",
      build: 1215,
    },
  },
];

function getUser() {
  let row = prompt("input your name", "");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(Users.find((user) => user.name == row));
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });
}

async function user() {
  const result = await getUser()
    .then((user) => user.address)
    .then((address) => console.log(address.city))
    .catch((error) => console.warn(error));

  return result;
}

function selfRange() {
  a = prompt("enter num", "");
  b = prompt("enter num", "");

  arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(+i);
  }
  return arr;
}

let numOfArray = selfRange();

function resultNum() {
  function* numGenerator() {
    numOfArray;
    for (let num of numOfArray) {
      yield num;
    }
  }

  const num = numGenerator();

  for (let value of num) {
    console.log(value);
  }
}

let generator = generateSequence();

for (let value of generator) {
  console.log(value);
}
