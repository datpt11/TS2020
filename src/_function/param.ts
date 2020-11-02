// day du tham so
function infoUser(name: string, age: number): string {
    return `my name is ${name}, ${age} years old`;
}

// tham so default
function infoUser2(name: string, age: number = 100): string {
    return `my name is ${name}, ${age} years old`;
}

// tham so khuyet
function infoUser3(name: string, age?: number): string {
    if (age === undefined) {
        return `my name is ${name}`;
    } else {
        return `my name is ${name}, ${age} years old`;
    }
}

function totalLength (x: (string | string[]) , y: (string[] | string)):number {
    return x.length + y.length;
}

// console.log(totalLength('dat', ["dsadsa", "dsadsa"]));
// console.log(totalLength(["dsadsa", "dsadsa"], ["dsadsa", "dsadsa"]));
// console.log(totalLength('dat', 'dsadsa'));