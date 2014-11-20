function* gen123() {
    var i = 1;
    yield i; // -> 1
    i += 1;
    yield i; // -> 2
}

g = gen123();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { done: true }
