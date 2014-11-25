function foo(callbacks) {
    for (var i = 99; i >= 0; i--) {
        var song = i + " bottles of beer left";

        callbacks.push(function () {
            print(song);
        });
    }

    return callbacks;
}

foo([]).forEach(function (callback) {
    callback();
});
