// * type AddFn = (a: number, b: number) => number
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;

interface Named {
  readonly name: string;
  outputName?: string
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// * Greetable extends Named interface type and We're using it on Paerson class to track which properties and methods we have in our class.

class Person implements Greetable {
  name: string;
  age: number = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}
let user1: Greetable;

user1 = new Person('Giorgi');

// ! We cannot reassign name property because it's readonly in Greetable interface.
// user1.name = 'Test' 


user1.greet('Hello');
