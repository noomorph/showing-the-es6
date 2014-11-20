Math.max(7, 4, 11); // 11

var a = [7, 4, 11];
Math.max(a); // NaN

Math.max.apply(null, a); // 11

Math.max(...a); // 11
