var Point = (function () {
    var instances = [],
        private = [];

    function Point(x, y) {
        instances.push(this);
        private.push({ x: x, y: y });
    }

    Point.prototype.distanceTo = function (point) {
        var private1 = private[instances.indexOf(this)],
            private2 = private[instances.indexOf(point)],
            dx = private1.x - private2.x,
            dy = private1.y - private2.y;

        return Math.sqrt(dx * dx + dy * dy);
    };

    return Point;
}());
