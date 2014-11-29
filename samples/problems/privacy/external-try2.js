var Point = (function () {
    var map = new Map();

    function Point(x, y) {
        map.set(this, { x: x, y: y });
    }

    Point.prototype.distanceTo = function (point) {
        var dx = map.get(point).x - map.get(this).x,
            dy = map.get(point).y - map.get(this).y;

        return Math.sqrt(dx * dx + dy * dy);
    };

    return Point;
}());
