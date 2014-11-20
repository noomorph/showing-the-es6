// ECMAScript 6

let obj = {
    __proto__: someObject,  // special property
    myMethod(arg1, arg2) {
        /* ... */
    }
};

// ECMAScript 5

var obj = Object.create(someObject);
obj.myMethod = function (arg1, arg2) {
    /* ... */
};
