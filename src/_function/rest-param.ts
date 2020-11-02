const sumNumber = (...args: number[]): number => {
    const total = args.reduce((previous, current) => {
        return previous + current; 
    })
    return total;
}

console.log(sumNumber(1, 2, 3, 4, 5));