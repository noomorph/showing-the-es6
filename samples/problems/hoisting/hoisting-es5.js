function foo(callbacks) {
    for (var i = 99; i >= 0; i--) {
        var song = ;

        callbacks.push(function (song) {
            print(song);
        }.bind(null, i + " bottles of beer left");
    }

    return callbacks;
}

foo([]).forEach(function (callback) {
    callback();
});
