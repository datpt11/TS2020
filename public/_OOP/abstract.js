"use strict";
class Car {
    constructor(color) {
        this.color = color;
    }
    move() {
        return "xe dang di chuyen";
    }
}
class Audi extends Car {
    getColor() {
        return this.color;
    }
    move() {
        return `xe mau ${this.color} dang di chuyen`;
    }
}
const A8 = new Audi("blue");
console.log(A8.move());
