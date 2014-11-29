class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        let c = this.color;
        return c + ' ' + super();
    }
}

function ColorPoint(x, y, color) {
    Point.call(this, x, y);
    this.color = color;
}

var Point$ = Point.prototype;

ColorPoint.prototype =
    Object.create(Point$);

ColorPoint.prototype.constructor =
    ColorPoint;

ColorPoint.prototype.toString =
    function () {
        var c = this.color;
        var base = Point$.toString;
        return c + ' ' + base.call(this);
    };
