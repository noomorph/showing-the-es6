var iterable = {};
iterable[Symbol.iterator] = function () {
    var i = -1;
    return {
        next: function () {
            return { value: ++i, done: i > 2 };
        }
    };
};

for (var value of iterable) { print(value); }
// 0, 1, 2
