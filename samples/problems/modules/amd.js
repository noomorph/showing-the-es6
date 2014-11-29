/* foo.js */
define(function () {
    function foo() {}

    return {
        foo: foo
    };
});

/* bar.js */
define('foo', function (foo) {
    foo.foo();
});
