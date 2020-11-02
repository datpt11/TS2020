"use strict";
var sumNumber = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var total = args.reduce(function (previous, current) {
        return previous + current;
    });
    return total;
};
console.log(sumNumber(1, 2, 3, 4, 5));
