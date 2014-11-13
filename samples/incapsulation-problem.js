window.Foo = (function () {
    function Foo(value) {
        var _value = value;

        this.getValue = function () {
            return value;
        };

        this.setValue = function (value) {
            _value = value;
        };
    }

    return Foo;
}());
