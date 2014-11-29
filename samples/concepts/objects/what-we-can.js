System.register("what-we-can", [], function() {
  "use strict";
  var __moduleName = "what-we-can";
  function require(path) {
    return $traceurRuntime.require("what-we-can", path);
  }
  var Point = function Point(x, y) {};
  var $Point = Point;
  ($traceurRuntime.createClass)(Point, {
    get x() {
      return this._x;
    },
    set x(val) {
      this._x = val;
    }
  }, {zero: function() {
      return new $Point(0, 0);
    }});
  return {};
});
System.get("what-we-can" + '');
