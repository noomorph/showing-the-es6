// lib/math.js
let notExported = 'abc';
export function square(x) {
    return x * x;
}

export const MY_CONSTANT = 123;

// main1.js
import { square } from 'lib/math';
console.log(square(3));

// main2.js
import * as math from 'lib/math';
console.log(math.square(3));
