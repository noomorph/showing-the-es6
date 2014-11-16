window.Foo = (function () {
    var instances = [],
        map = {};

    function getPrivate(instance) {
        var id = instances.indexOf(instance);
        return map[id];
    }

    function Point(value) {
        var id = instances.length;
        map[id] = { value: value };
        instances.push(this);
    }

    Foo.prototype.getValue = function () {
        return getPrivate().value;
    };

    Foo.prototype.setValue = function (value) {
        getPrivate().value = value;
    };

    return Foo;
}());

