Array.from([1, 2, 3], function (x) {
    return x * 10;
}); // [10, 20, 30]

Array.from('foo'); // = Array.of() with 1 arg
// ['f', 'o', 'o']

Array.from({ length: 5 }, function (v, i) {
    return i;
}); // [0, 1, 2, 3, 4]
