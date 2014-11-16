var it = makeIterator([10, 20, 30, 40]);

it.next(); // { value: 10, done: false }
it.next(); // { value: 20, done: false }
it.next(); // { value: 30, done: false }
it.next(); // { value: 40, done: false }
it.next(); // { done: true }
