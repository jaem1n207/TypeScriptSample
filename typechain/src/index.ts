class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const jaemin = new Human("Jaemin", 19, "male");

const sayHi = (person: Human): string => {
  return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(jaemin));

export {};
