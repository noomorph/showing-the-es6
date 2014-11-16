var actual   = [0, 0, 1, 2, 0, 5];
var expected = [1, 1, 1, 1, 1, 1];

// old school
for (var i = start; i < end; i++) {
    actual[i] = value;
} // { start: 0, end: length, value: 1 }

actual.fill(1);       // [1, 1, 1, 1, 1, 1]
actual.fill(0, 2, 4); // [1, 1, 0, 0, 1, 1]
