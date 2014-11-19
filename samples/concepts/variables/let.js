function order(x, y) {
    if (x > y) {
        let tmp = x;
        x = y;
        y = tmp;
    }

    console.log(tmp === x);
        // ReferenceError:
        // tmp is not defined
    return [x, y];
}
