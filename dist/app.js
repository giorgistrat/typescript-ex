"use strict";
var button = document.querySelector('button');
function clickHandler(message) {
    console.log('Clicked! ' + message);
}
var testFunc = function (num1, num2) {
    if (num1 > num2) {
        return true;
    }
    return false;
};
button.addEventListener('click', function () {
    return clickHandler.bind(null, "You're Welcome!");
});
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, item) {
        return acc + item;
    }, 0);
};
var addedNumbers = add(231, 321);
console.log('addedNumbers ' + addedNumbers);
var person = {
    firstName: 'Giorgi',
    age: 23,
};
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log(hobbies, hobby1, hobby2);
var userName = person.firstName, age = person.age;
console.log(userName, age);
//# sourceMappingURL=app.js.map