abstract class Car {
    color: string
    constructor(color: string){
        this.color = color;
    }
    abstract getColor() : string;
    move(): string {
        return "xe dang di chuyen";
    }
}

class Audi extends Car {
    getColor(): string {
        return this.color;
    }
    move(): string {
        return `xe mau ${this.color} dang di chuyen`
    }
}

const A8 = new Audi("blue");
console.log(A8.move());