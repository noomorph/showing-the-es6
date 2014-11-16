if (!String.prototype.repeat) {
  String.prototype.repeat = function (count) {
    "use strict";
    if (this == null)
      throw new TypeError("can't convert " + this + " to object");
    var str = "" + this;
    count = +count;
    if (count != count)
      count = 0;
    if (count < 0)
      throw new RangeError("repeat count must be non-negative");
    if (count == Infinity)
      throw new RangeError("repeat count must be less than infinity");
    count = Math.floor(count);
    if (str.length == 0 || count == 0)
      return "";
    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (august 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so :
    if (str.length * count >= 1 << 28)
      throw new RangeError("repeat count must not overflow maximum string size");
    var rpt = "";
    for (;;) {
      if ((count & 1) == 1)
        rpt += str;
      count >>>= 1;
      if (count == 0)
        break;
      str += str;
    }
    return rpt;
  }
}

function iterateWords(str) {
    var lastIndex = 0,
        index;

    return {
        next: function () {
            var step;

            while (lastIndex < str.length && str[lastIndex] === ' ') {
                lastIndex += 1;
            }

            if (lastIndex === str.length) {
                return { done: true };
            }

            index = lastIndex;

            while (index < str.length && str[index] !== ' ') {
                index += 1;
            }

            step = {
                value: str.substr(lastIndex, index - lastIndex),
                done: false
            };

            lastIndex = index;
            return step;
        }
    };
}

function calculateAverageWordLength(str) {
    var it = iterateWords(s),
        step,
        len = 0,
        count = 0;

    while (!(step = it.next()).done) {
        len += step.value.length;
        count += 1;
    }

    return len / count;
}


var s = ("this is a sample sentence without " +
        "full stop to demonstrate that using " +
        "iterators is are good decision ").repeat(50000);

var avg = calculateAverageWordLength(s);

print("Average word length: " + avg.toFixed(1));
readline();
