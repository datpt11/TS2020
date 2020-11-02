class Animal {
    private _weight: number;

    constructor(weight: number) {
        this._weight = weight;
    }
    
    public get weight() : number {
        return this._weight;
    }
    
    public set weight(v : number) {
        this._weight = v;
    }
}
const bird = new Animal(40);

bird.weight = 50;
console.log(bird.weight);