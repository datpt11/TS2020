interface IPerson {
    name: string,
    age: number,
    speak?(): void 
}

let personOne: IPerson;
personOne = {
    name: "dat",
    age: 20,
}
let personTwo: IPerson = {
    name: "dat",
    age: 20,
    speak() {}
}