let x, y;

{ a: x, b: y } = { a: 3 }; // TypeError
[x, y] = ['a']; // TypeError
[x, y] = ['a', 'b', 'c']; // OK: x='a', y='b'
