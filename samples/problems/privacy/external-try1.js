var Point = (function () {
    var map = {};

    function Point(x, y) {
        map[this] = { x: x, y: y };
    }

    Point.prototype.distanceTo = function (point) {
        var dx = map[point].x - map[this].x,
            dy = map[point].y - map[this].y;

        return Math.sqrt(dx * dx + dy * dy);
    };

    return Point;
}());
