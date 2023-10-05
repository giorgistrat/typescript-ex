"use strict";
let add;
add = (n1, n2) => n1 + n2;
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = new Person('Giorgi');
user1.greet('Hello');
//# sourceMappingURL=app.js.map