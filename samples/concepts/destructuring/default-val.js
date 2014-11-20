{ a: x, b: y=5 } = { a: 3 }; // x=3, y=5
{ a: x, b: y=5 } = { a: 3, b: undefined }; // y=5

[x, y='b'] = ['a']; // x='a', y='b'
[x, y='b'] = ['a', undefined]; // x='a', y='b'
