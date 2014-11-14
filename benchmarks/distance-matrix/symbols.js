var Point = (function () {
    var X = Symbol("x", true),
        Y = Symbol("y", true),
        Z = Symbol("z", true);

    function Point(x, y, z) {
        this[X] = +x;
        this[Y] = +y;
        this[Z] = +z;
    }

    Point.random = function () {
        return new Point(
            100 * Math.random() - 50,
            100 * Math.random() - 50,
            100 * Math.random() - 50
        );
    };

    Point.prototype.distanceTo = function (point) {
        var dx = point[X] - this[X],
            dy = point[Y] - this[Y],
            dz = point[Z] - this[Z];

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

function readPoints() {
    var points = [],
        line,
        point;

    while ((line = readline()) != null) {
        line = line.split(' ');
        point = new Point(line[0], line[1], line[2]);
        points.push(point);
    }

    return points;
}

(function main() {
    var points = [];
    for (i = 0; i < 1E4; i++) {
        points.push(Point.random());
    }

    var matrix = new DistanceMatrix(points);

    // for (var i = 0; i < points.length; i++) {
    //     var row = [];
    //     for (var j = 0; j < points.length; j++) {
    //         row.push(matrix.get(i, j).toFixed(2));
    //     }
    //     print(row.join(' '));
    // }
}());
