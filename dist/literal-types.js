"use strict";
var Test;
(function (Test) {
    Test[Test["a"] = 5] = "a";
    Test[Test["b"] = 6] = "b";
})(Test || (Test = {}));
console.log(Test.a, Test[5], Test.b, Test[6]);
//# sourceMappingURL=literal-types.js.map