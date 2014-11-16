function makeGenerator(array) {
    function makeIterator2() {
        var i = -1;

        return {
            next: function () {
                i += 1;

                return {
                    value: array[i],
                    done: i >= array.length
                };
            }
        };
    }

    var it = makeIterator2();
    it[Symbol.iterator] = makeIterator2;

    return it;
}

var it = makeGenerator([10, 20, 30, 40, 50]),
    step;

while (!(step = it.next()).done) {
    print(step.value);
}

for (var val of it) {
    print(val);
}
