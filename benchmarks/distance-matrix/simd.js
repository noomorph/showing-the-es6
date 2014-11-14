function randomPoint() {
    return SIMD.float32x4(
        100.0 * Math.random() - 50.0,
        100.0 * Math.random() - 50.0,
        100.0 * Math.random() - 50.0,
        0.0
    );
}

function calcDistanceMatrix(points) {
    var n = points.length,
        zip = new Array(n * (n - 1) / 2),
        i, j, k, d, d2;

    for (k = 0, i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++, k++) {
            d = SIMD.float32x4.sub(points[i], points[j]);
            d2 = SIMD.float32x4.mul(d, d);
            zip[k] = Math.sqrt(d2.x + d2.y + d2.z + d2.w);
        }
    }

    return zip;
}

function getDistance(zip, n, row, cell) {
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
        index += n - k - 1;
    }

    index += cell - row - 1;

    return zip[index];
}

(function main() {
    var points = [];
    for (var i = 0; i < 1E4; i++) {
        points.push(randomPoint());
    }

    var matrix = calcDistanceMatrix(points);
}());
