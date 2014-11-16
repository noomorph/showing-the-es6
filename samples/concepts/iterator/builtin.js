var arr = ["a", "b", "c"];

var keys = arr.keys();
keys.next(); // { value: 0, done: false }

var values = arr.values();
values.next(); // { value: "a", done: false }

var entries = arr.entries();
entries.next(); // { value: [0, "a"], done: false }
