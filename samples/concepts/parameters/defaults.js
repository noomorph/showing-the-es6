function foo(x, y=5) {
    return [x, y];
}

foo(1, 2); // [1, 2]

foo(1, undefined); // [1, 5]

foo(1); // [1, 5]

foo(); // [undefined, 5]
