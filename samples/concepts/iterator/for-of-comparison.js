var arr = [3, 5, 7];
arr.foo = "hello";

var i;
for (i in arr) {
   console.log(i); // "0", "1", "2", "foo"
}

for (i of arr) {
   console.log(i); // "3", "5", "7"
}
