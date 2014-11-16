var o1 = { a: 1 },
    o2 = { b: 2 },
    o3 = { c: 3 };

// make shallow clone
var clone = Object.assign({}, o1);
clone; // { a: 1 }

// merge o2, o3 into o1
Object.assign(o1, o2, o3);
o1; // { a: 1, b: 2, c: 3}
