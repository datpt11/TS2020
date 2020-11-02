class Post<J, K, L> {
    private id: J;
    private title: K;
    private desc: L;
    constructor(id: J, title: K, desc: L) {
        this.id = id,
        this.title = title,
        this.desc = desc
    }
    showPost(): string{
        return `${this.id} - ${this.title} - ${this.desc}`
    }
}
const post1 = new Post<number, string, string>(1, "2", "3");
const post2 = new Post<boolean, string, string>(true, "2", "3");
