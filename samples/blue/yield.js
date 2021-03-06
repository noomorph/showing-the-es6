function* fibonacci() {
    let a = 0, b = 1;

    yield a;
    while (Number.isSafeInteger(b)) {
        [a, b] = [b, a+b];
        yield a;
    }
}

let step;
while (!(step = fibonacci()).done) {
    print(step.value);
}
