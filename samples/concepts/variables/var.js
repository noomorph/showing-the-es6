function order(x, y) {
    if (x > y) {
        var tmp = x;
        x = y;
        y = tmp;
    }

    console.log(tmp === x);
        // true

    return [x, y];
}
