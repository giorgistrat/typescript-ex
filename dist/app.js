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
