interface Greetable {
  readonly name: string;
  greet(phrase: string): void;
}

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
/*
// ! We cannot reassign name property because it's readonly in Greetable interface.
user1.name = 'Test' 
*/

user1.greet('Hello');
