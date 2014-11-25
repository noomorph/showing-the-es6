(function foo() {
    for (var i = 0; i < 10; i++) {
        let j = i;

        setTimeout(function () {
            print(j);
        }, 100);
    }
}());
