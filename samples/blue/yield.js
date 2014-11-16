/* jshint esnext:true */

function* fibonacci() {
    let a = 0, b = 1;

    yield a;
    while (Number.isSafeInteger(b)) {
        [a, b] = [b, a+b];
        yield a;
    }
}

for (let number of fibonacci()) {
    print(number);
}
