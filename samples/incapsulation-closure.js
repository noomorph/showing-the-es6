window.Foo = (function () {
    function Foo(value) {
        this.value = value;
    }

    Foo.prototype.getValue = function () {
        return this.value;
    };

    Foo.prototype.setValue = function (value) {
        this.value = value;
    };

    return Foo;
}());
