interface Human {
  name: string;
  gender: string;
  age: number;
}

const person = {
  name: "Jaemin",
  gender: "male",
  age: 19,
};

const sayHi = (person: Human): string => {
  return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(person));

export {};
