"use strict";
class Animal {
    constructor(weight) {
        this._weight = weight;
    }
    get weight() {
        return this._weight;
    }
    set weight(v) {
        this._weight = v;
    }
}
const bird = new Animal(40);
bird.weight = 50;
console.log(bird.weight);
