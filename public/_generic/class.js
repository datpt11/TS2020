"use strict";
class Post {
    constructor(id, title, desc) {
        this.id = id,
            this.title = title,
            this.desc = desc;
    }
    showPost() {
        return `${this.id} - ${this.title} - ${this.desc}`;
    }
}
const post1 = new Post(1, "2", "3");
const post2 = new Post(true, "2", "3");
