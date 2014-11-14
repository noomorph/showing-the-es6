var Point = (function () {
    var count = 0,
        private = {};

    function Point(x, y, z) {
        this.id = ++count;
        private[this.id] = {
            x: +x,
            y: +y,
            z: +z
        };
    }

    Point.random = function () {
        return new Point(
            100 * Math.random() - 50,
            100 * Math.random() - 50,
            100 * Math.random() - 50
        );
    };

    Point.prototype.distanceTo = function (point) {
        var a = private[this.id],
            b = private[point.id],
            dx = a.x - b.x,
            dy = a.y - b.y,
            dz = a.z - b.z;

        return Math.sqrt(dx*dx + dy*dy + dz*dz);
    };

    return Point;
}());

function DistanceMatrix(points) {
    var i, j, d;

    this.zip = [];
    this.n = points.length;

    for (i = 0; i < points.length; i++) {
        for (j = i + 1; j < points.length; j++) {
            d = points[i].distanceTo(points[j]);
            this.zip.push(d);
        }
    }
}

DistanceMatrix.prototype.get = function (row, cell) {
    var index = 0;

    if (row === cell) {
        return 0;
    }

    if (row > cell) {
        var tmp = row;
        row = cell;
        cell = tmp;
    }

    for (var k = 0; k < row; k++) {
        index += this.n - k - 1;
    }

    index += cell - row - 1;

    return this.zip[index];
};

(function main() {
    var points = [];
    for (i = 0; i < 1E4; i++) {
        points.push(Point.random());
    }

    var matrix = new DistanceMatrix(points);
}());
