"use strict";
function add2(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
;
const result = add2('Hello ', 'World');
result.split(' ');
//# sourceMappingURL=function-overloads.js.map