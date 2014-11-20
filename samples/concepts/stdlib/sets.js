let set1 = new Set();
set1.add('hello');
console.log(set1.has('hello')); // true
console.log(set1.has('world')); // false

let set2 = new Set([3,2,1,3,2,3]);
console.log(set2.values()); // 1,2,3
