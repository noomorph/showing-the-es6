'use strict';

const C = { value: 0 };
C = "another value";

try {
} catch(e) {
    print("cannot set another value");
}

C.value += 1;
print(C.value);
