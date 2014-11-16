var actual   = [0, 0, 1, 2, 0, 5];
var expected = [0, 1, 2, 0, 0, 5];

// old school
for (var i = start; i < end; i++) {
    actual[target + i - start] = arr[i];
} // { start: 2, end: 5, target: 1 }

actual.copyWithin(1, 2, 5); // new method
