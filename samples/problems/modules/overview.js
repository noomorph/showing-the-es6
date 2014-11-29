/* foo.js */
function foo() {}

module.exports = {
    foo: foo
};

/* bar.js */
var foo = require('./foo');
foo.foo();
