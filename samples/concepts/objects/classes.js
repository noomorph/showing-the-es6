class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        let x = this.x;
        let y = this.y;
        return `${x}, ${y}`;
    }
}

function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString =
    function () {
        var x = this.x;
        var y = this.y;
        return '('+x+', '+y+')';
    };
