class Bike {
    static getColor<T>(color: T): void {
        console.log(color);
    }
}
Bike.getColor<string>("red");