/* 
  Using Generics in a function.
*/

function wrap<T>(param: T) {
  return {
    param
  };
}

const wrapped = wrap(10);

function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  };
}

const merged = merge({ foo: "hello" }, { bar: 1 });

/* 
  Using Generics in a interface
*/

interface Items<T> {
  list: T[];
}
const items: Items<string> = {
  list: ["a", "b", "c"]
};

const itemNumbers: Items<number> = {
  list: [1, 2, 3, 4, 5]
};

/* 
  Using Generics in a Type alias
*/

type TypeItems<T> = {
  list: T[];
};

const typeItems: TypeItems<string> = {
  list: ["a", "b", "c"]
};

/* 
  Using Generics in a Class
*/

class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.list);
console.log(queue.dequeue());
console.log(queue.dequeue());
