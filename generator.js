function* generateSequence() {
  yield getUser();
  yield resultNum();
  yield 3;
}

function getUser() {
  return {
    name: "vitali",
    age: 32,
    address: {
      city: "Minsk",
      build: 115,
    },
  };
}

function selfRange() {
  a = prompt("enter num", "");
  b = prompt("enter num", "");

  arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(+i);
  }
  return arr
}

let numOfArray = selfRange();

function resultNum() {
  function* numGenerator() {
    numOfArray
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
