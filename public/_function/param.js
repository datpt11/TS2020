"use strict";
// day du tham so
function infoUser(name, age) {
    return "my name is " + name + ", " + age + " years old";
}
// tham so default
function infoUser2(name, age) {
    if (age === void 0) { age = 100; }
    return "my name is " + name + ", " + age + " years old";
}
// tham so khuyet
function infoUser3(name, age) {
    if (age === undefined) {
        return "my name is " + name;
    }
    else {
        return "my name is " + name + ", " + age + " years old";
    }
}
function totalLength(x, y) {
    return x.length + y.length;
}
// console.log(totalLength('dat', ["dsadsa", "dsadsa"]));
// console.log(totalLength(["dsadsa", "dsadsa"], ["dsadsa", "dsadsa"]));
// console.log(totalLength('dat', 'dsadsa'));
