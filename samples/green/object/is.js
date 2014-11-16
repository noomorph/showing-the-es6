Object.is(a, b); // a === b

NaN === NaN; // false
Object.is(NaN, NaN); // true

0 === -0; // true
Object.is(0, -0); // false
