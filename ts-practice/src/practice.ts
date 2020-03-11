interface Person {
  name: string;
  age?: number;
}

interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: "짱구",
  age: 20
};

const expert: Developer = {
  name: "도라에몽",
  skills: ["javascript", "react"]
};

const people: Person[] = [person, expert];
